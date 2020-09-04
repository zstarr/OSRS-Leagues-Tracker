import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTableComponent } from './task-table/task-table.component';
import { HighscoresComponent } from './highscores/highscores.component'
import { TaskTrackerComponent } from './task-tracker.component';
import { AngularMaterialModule } from "../core/material.module";
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TaskTableComponent, TaskTrackerComponent, HighscoresComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,    
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TaskTrackerModule { }
