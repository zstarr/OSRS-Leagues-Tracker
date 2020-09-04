import { Component, OnInit, Input } from '@angular/core';
import { HiscoreResult } from './models/highscore.model';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.scss']
})
export class TaskTrackerComponent implements OnInit {

  hiscore: HiscoreResult;

  constructor() { }

  ngOnInit(): void {
  }

}
