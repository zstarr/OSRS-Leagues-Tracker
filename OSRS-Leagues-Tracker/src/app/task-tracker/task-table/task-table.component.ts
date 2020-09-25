import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ThemePalette } from '@angular/material/core';
import { LeagueTask } from '../models/league-tasks.model';
import { HiscoreResult } from '../models/highscore.model';
import { PointService } from '../services/points.service';


@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
})
export class TaskTableComponent implements OnInit {
  
  @Input() hiscore: HiscoreResult;
  @Input() pointsPerTask: number;
  @Input() leagueTasks: LeagueTask[];
  pointTotal: number;

  checkColor: ThemePalette = "warn";
  displayedColumns: string[] = [
    'select',
    'name',
    'task',
    'skills',
    'locations',
  ];
  dataSource;
  selection = new SelectionModel<LeagueTask>(true, []);

  constructor(private pointService: PointService) {
    this.pointService.sharedTotal.subscribe(total => this.pointTotal = total);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<LeagueTask>(this.leagueTasks);
    this.selection.changed.subscribe(
      (a) => {
        this.pointService.nextPointTotal((a.added.length - a.removed.length) * this.pointsPerTask)
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: LeagueTask): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.task + 1
    }`;
  }
}
