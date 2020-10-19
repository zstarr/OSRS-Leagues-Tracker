import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ThemePalette } from '@angular/material/core';
import { LeagueTask } from '../models/league-tasks.model';
import { HiscoreResult } from '../models/highscore.model';
import { PointService } from '../services/points.service';
import { TaskTrackerService } from '../services/task-tracker.service';
import { LocationService } from '../services/locations.service';
import { LeagueLocations } from '../models/league-locations.model';
import { stringify } from '@angular/compiler/src/util';
import { faTheRedYeti } from '@fortawesome/free-brands-svg-icons';

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
  selectedTasks: number[] = [];
  selectedLocations: LeagueLocations[] = [];
  locationFilter: boolean;
  nullLocationFilter: boolean;
  checkColor: ThemePalette = 'warn';
  displayedColumns: string[] = [
    'select',
    'name',
    'task',
    'skills',
    'locations',
  ];
  dataSource;
  selection = new SelectionModel<LeagueTask>(true, []);

  constructor(
    private pointService: PointService,
    private taskTrackerService: TaskTrackerService,
    private locationService: LocationService
  ) {
    this.pointService.sharedTotal.subscribe(
      (total) => (this.pointTotal = total)
    );
    this.taskTrackerService.sharedTasks.subscribe(
      (taskIds) => (this.selectedTasks = taskIds)
    );
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<LeagueTask>(this.leagueTasks);

    this.dataSource.filterPredicate = (task: LeagueTask, filter: string) => {
      var pass = false;
      if (this.locationFilter && this.nullLocationFilter) {
        pass = !this.isRegionNull(task) && this.isTaskRegionSelected(task, filter)
      }
      else if (this.locationFilter) {
        pass = this.isTaskRegionSelected(task, filter) || this.isRegionNull(task);
      }
      else if (this.nullLocationFilter) {
        pass = !this.isRegionNull(task);
      }
      else {
        pass = true;
      };
      return pass;
    };

    this.locationService.sharedLocations.subscribe((locations) => {
      this.selectedLocations = locations;
      this.dataSource.filter = this.selectedLocations.toString();
    });
    this.locationService.locationFilter.subscribe((value) => {
      this.locationFilter = value;
      this.dataSource.filter = this.selectedLocations.toString();
    });

    this.locationService.showNullLocations.subscribe((value) => {
      this.nullLocationFilter = value;
      this.dataSource.filter = this.selectedLocations.toString();
    });

    this.selection.changed.subscribe((a) => {
      a.added
        ?.filter((task) => !isNaN(task?.id))
        .forEach((task) => this.taskTrackerService.addTask(task.id));
      a.removed
        ?.filter((task) => !isNaN(task?.id))
        .forEach((task) => this.taskTrackerService.removeTask(task.id));
      if (a.added[0] === undefined && a.removed[0] === undefined) return;
      this.pointService.nextPointTotal(
        (a.added.length - a.removed.length) * this.pointsPerTask
      );
    });

    this.selectedTasks.forEach((taskId) =>
      this.selection.select(this.leagueTasks.find((task) => task.id === taskId))
    );
  }

  isRegionNull(task: LeagueTask): boolean {
    return task.location === null ? true : false;
  }

  isTaskRegionSelected(task: LeagueTask, regions: string): boolean {
    if (!task.location) return false;
    var found = false;
    const keys = regions.split(',');
    if (keys)
      keys.forEach((key: string) => {
        if (task.location == parseInt(key)) {
          found = true;
        }
      });
    return found;
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
