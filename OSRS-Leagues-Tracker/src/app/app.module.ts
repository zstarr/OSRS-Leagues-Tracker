
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { TaskTrackerModule } from "./task-tracker/task-tracker.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    ToolbarModule,
    DashboardModule,
    AppRoutingModule,
    MatTableModule,
    TaskTrackerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }