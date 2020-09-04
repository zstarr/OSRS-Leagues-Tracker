import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ThemePalette } from '@angular/material/core';
import { LeagueTask } from '../models/league-tasks.model';
import { LeagueTaskArray } from '../models/league-tasks.data'


@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
})
export class TaskTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  checkColor: ThemePalette = "warn";
  displayedColumns: string[] = [
    'select',
    'name',
    'task',
    'skills',
    'locations',
  ];
  dataSource = new MatTableDataSource<LeagueTask>(LeagueTaskArray);
  selection = new SelectionModel<LeagueTask>(true, []);

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
