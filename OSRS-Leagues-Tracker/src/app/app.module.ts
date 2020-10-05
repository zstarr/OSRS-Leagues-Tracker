
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent, DialogElementsPortraitCheck } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { TaskTrackerModule } from "./task-tracker/task-tracker.module";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent, DialogElementsPortraitCheck
  ],
  imports: [
    CoreModule,
    ToolbarModule,
    DashboardModule,
    AppRoutingModule,
    MatTableModule,
    TaskTrackerModule,
    MatDialogModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }