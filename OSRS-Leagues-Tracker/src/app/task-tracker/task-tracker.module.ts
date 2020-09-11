import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTableComponent } from './task-table/task-table.component';
import { HighscoresComponent } from './highscores/highscores.component'
import { TaskTrackerComponent } from './task-tracker.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillReqComponent } from "./task-table/skill-req-cell/skill-req.component";


@NgModule({
  declarations: [TaskTableComponent, TaskTrackerComponent, HighscoresComponent, SkillReqComponent],
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
