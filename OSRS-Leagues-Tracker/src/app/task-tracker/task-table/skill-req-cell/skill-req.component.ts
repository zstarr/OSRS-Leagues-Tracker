import { Component, OnInit, Input } from '@angular/core';
import { HiscoreResult } from '../../models/highscore.model';
import { SkillData, LeagueTask } from '../../models/league-tasks.model';
import { HiscoreService } from '../../services/hiscore.service';

@Component({
  selector: 'skill-req-cell',
  templateUrl: './skill-req.component.html',
  styleUrls: ['./skill-req.component.scss'],
})
export class SkillReqComponent implements OnInit {
  
  hiscore: HiscoreResult;
  @Input() skills: SkillData;
  pointTotal: number;

  constructor(private hiscoreService: HiscoreService) { 
    this.hiscoreService.playerHiscore.subscribe(player => this.hiscore = player);
  }

  ngOnInit(): void {
    
  }

  skillReq(skill: string, ) {
    if (!this.skills[skill] || !this.hiscore)
      return
    if (this.skills[skill] <= this.hiscore[skill]?.level)
      return 'meetsReq';
    else
      return 'missingReq'
  }

}
