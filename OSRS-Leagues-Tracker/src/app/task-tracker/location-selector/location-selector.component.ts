import { AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueLocations } from '../models/league-locations.model';
import { LocationService } from "../services/locations.service";

@Component({
  selector: 'location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.scss']
})
export class LocationSelectorComponent implements OnInit, AfterViewInit {

  locations: any[] = [];
  selectedLocations: LeagueLocations[];
  isLocationFilter: Observable<boolean>;
  showNullLocations: Observable<boolean>;


  @ViewChildren('locationCheckboxes') private checkboxesMultiple: QueryList<any>;

  get locationList(): typeof LeagueLocations {
    return LeagueLocations;
  }

  constructor(private locationService: LocationService, private cdr: ChangeDetectorRef) {
    this.locationService.sharedLocations.subscribe(locations => this.selectedLocations = locations)
    this.locations = Object.values(this.locationList).filter(key => !isNaN(Number(this.locationList[key])));
   }

  ngOnInit(): void {
    this.locations = Object.keys(this.locations).map(k => this.locations[k]).sort();
    this.isLocationFilter = this.locationService.locationFilter;
    this.showNullLocations = this.locationService.showNullLocations;
  }

  ngAfterViewInit() {
    let checkboxesArray = this.checkboxesMultiple.toArray();
    checkboxesArray[4].checked = true;
    checkboxesArray[5].checked = true;
    this.locationService.toggleLocation(LeagueLocations.Misthalin);
    this.locationService.toggleLocation(LeagueLocations.Karamja);
    this.cdr.detectChanges()
  }

  toggleLocation(location: string) {
    this.locationService.toggleLocation(LeagueLocations[location]);
  }

  toggleLocationFilter(checked: boolean) {
    this.locationService.toggleFilter(checked);
  }

  toggleNullLocations(checked: boolean) {
    this.locationService.toggleNullLocations(checked);
  }
}
