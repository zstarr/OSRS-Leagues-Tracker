import { Component, OnInit, Input } from '@angular/core';
import { HiscoreResult } from './models/highscore.model';
import { BehaviorSubject } from 'rxjs';
import { Point } from '@angular/cdk/drag-drop';
import { PointService } from './services/points.service';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.scss']
})
export class TaskTrackerComponent implements OnInit {

  hiscore: HiscoreResult;

  pointTotal: number;

  constructor(private pointService: PointService) {
    this.pointService.sharedTotal.subscribe(total => this.pointTotal = total)
   }

  ngOnInit(): void {
  }



}
