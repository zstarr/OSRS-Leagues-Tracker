import { Component, OnInit, Input } from '@angular/core';
import { HiscoreResult } from './models/highscore.model';
import { HiscoreService } from './services/hiscore.service';
import { PointService } from './services/points.service';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.scss']
})
export class TaskTrackerComponent implements OnInit {

  hiscore: HiscoreResult;

  pointTotal: number;

  constructor(private pointService: PointService, private hiscoreService: HiscoreService) {
    this.pointService.sharedTotal.subscribe(total => this.pointTotal = total);
    this.hiscoreService.playerHiscore.subscribe(player => this.hiscore = player);
   }

  ngOnInit(): void {
  }



}
