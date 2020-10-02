import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LeagueLocations } from "../models/league-locations.model";

@Injectable({ providedIn: 'root' })
export class LocationService {
  private selectedLocations = new BehaviorSubject<LeagueLocations[]>([]);
  sharedLocations = this.selectedLocations.asObservable();

  constructor() {}

  toggleLocation(location: LeagueLocations) {
    var locations = this.selectedLocations.getValue();
    if (locations.find(x => x === location))
        locations = locations.filter(x => x != location)
    else
        locations.push(location)
    this.selectedLocations.next(locations);
  }
}