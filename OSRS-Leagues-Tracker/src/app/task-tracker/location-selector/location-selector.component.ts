import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueLocations } from '../models/league-locations.model';
import { LocationService } from "../services/locations.service";

@Component({
  selector: 'location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.scss']
})
export class LocationSelectorComponent implements OnInit {

  locations: any[] = [];
  selectedLocations: LeagueLocations[];

  get locationList(): typeof LeagueLocations {
    return LeagueLocations;
  }

  constructor(private locationService: LocationService) {
    this.locationService.sharedLocations.subscribe(locations => this.selectedLocations = locations)
    this.locations = Object.values(this.locationList).filter(key => !isNaN(Number(this.locationList[key])));
   }

  ngOnInit(): void {
    this.locations = Object.keys(this.locations).map(k => this.locations[k]).sort();
  }

  toggleLocation(location: LeagueLocations) {
    this.locationService.toggleLocation(location);
  }

}
