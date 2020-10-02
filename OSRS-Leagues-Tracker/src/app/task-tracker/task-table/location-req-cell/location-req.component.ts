import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HiscoreResult } from '../../models/highscore.model';
import { LeagueLocations } from '../../models/league-locations.model';
import { LeagueTask } from '../../models/league-tasks.model';
import { HiscoreService } from '../../services/hiscore.service';

@Component({
  selector: 'location-req-cell',
  templateUrl: './location-req.component.html',
  styleUrls: ['./location-req.component.scss'],
})
export class LocationReqComponent implements OnInit {
  
  @Input() locations: LeagueLocations[];
  get locationList(): typeof LeagueLocations {
    return LeagueLocations;
  }

  constructor() { 


  }

  ngOnInit(): void {    
  }

  locationSelected(location: LeagueLocations) {
    return this.locations.includes(location) ? 'meetsReq' : 'missingReq';    
  }
  locationInTask(location: LeagueLocations) {    
    return this.locations.includes(location)
  }
}
