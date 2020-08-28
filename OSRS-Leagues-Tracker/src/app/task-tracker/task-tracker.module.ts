import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTableComponent } from './task-table/task-table.component';
import { TaskTrackerComponent } from './task-tracker.component';
import { AngularMaterialModule } from "../core/material.module";
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [TaskTableComponent, TaskTrackerComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatTableModule
  ]
})
export class TaskTrackerModule { }
