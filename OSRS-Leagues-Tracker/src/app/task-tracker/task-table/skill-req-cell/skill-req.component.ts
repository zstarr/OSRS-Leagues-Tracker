import { Component, OnInit, Input } from '@angular/core';
import { HiscoreResult } from '../../models/highscore.model';
import { SkillData, LeagueTask } from '../../models/league-tasks.model';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'skill-req-cell',
  templateUrl: './skill-req.component.html',
  styleUrls: ['./skill-req.component.scss'],
})
export class SkillReqComponent implements OnInit {
  
  @Input() hiscore: HiscoreResult;
  @Input() skills: SkillData;
  pointTotal: number;

  constructor() { }

  ngOnInit(): void {

  }

}
