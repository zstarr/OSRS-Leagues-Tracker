import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
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
  isSkillProd: boolean

  constructor(private hiscoreService: HiscoreService) { 
    this.hiscoreService.playerHiscore.subscribe(player => this.hiscore = player);
    this.hiscoreService.isSkillProd.subscribe(isSkillProd => this.isSkillProd = isSkillProd);
  }

  ngOnInit(): void {    
  }

  skillReq(skill: string, ) {    
    if (!this.skills[skill] || !this.hiscore)
      return;
    let boost: number = this.isSkillProd ? 12 : 0;    
    if (this.skills[skill] <= this.hiscore[skill]?.level + boost)
      return 'meetsReq';
    else
      return 'missingReq';
  }

}
