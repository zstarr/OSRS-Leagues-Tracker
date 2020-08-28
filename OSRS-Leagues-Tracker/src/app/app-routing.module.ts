import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';


const routes: Routes = [   
  { path: '**', component: TaskTrackerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
