import { Component, OnInit, Input } from '@angular/core';
import { LeagueLocations } from '../../models/league-locations.model';
import { LocationService } from '../../services/locations.service';

@Component({
  selector: 'location-req-cell',
  templateUrl: './location-req.component.html',
  styleUrls: ['./location-req.component.scss'],
})
export class LocationReqComponent implements OnInit {
  
  @Input() location: LeagueLocations;
  selectedLocations: LeagueLocations[];

  get locationList(): typeof LeagueLocations {
    return LeagueLocations;
  }

  constructor(private locationService: LocationService) {
    this.locationService.sharedLocations.subscribe(locations => this.selectedLocations = locations)
   }

  ngOnInit(): void {    
  }

  locationSelected(location: string) {
    return this.selectedLocations.includes(parseInt(location)) ? 'meetsReq' : 'missingReq';    
  }
  locationInTask(location: LeagueLocations) {    
    return this.location === location
  }
}
