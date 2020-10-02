import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PointService {
  private pointTotal = new BehaviorSubject<number>(0);
  sharedTotal = this.pointTotal.asObservable();

  pointTiers: number[] = [ 0, 400, 1200, 2500, 5000 ]

  constructor() {}

  nextPointTotal(pointsChanged: number) {
    this.pointTotal.next(this.pointTotal.value + pointsChanged);
  }
}
