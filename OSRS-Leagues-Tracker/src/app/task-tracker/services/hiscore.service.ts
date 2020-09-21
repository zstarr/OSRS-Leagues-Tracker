import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HiscoreResult } from '../models/highscore.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HiscoreService {

  runeliteURL: string = "https://api.runelite.net/runelite-1.6.26.1";
  private hiscore = new BehaviorSubject<HiscoreResult>(null);
  playerHiscore = this.hiscore.asObservable();

  constructor(private http: HttpClient) { }

  getRuneLiteHS(endpoint: string, username: string) : Observable<HiscoreResult> {
    const url = `${this.runeliteURL}/hiscore/${endpoint}?username=${username}`;
    return this.http.get<HiscoreResult>(url)
    // .pipe(
    //   tap(
    //     response => console.log(response)
    //   )
    // )
  }

  updateFoundPlayer(newPlayer: HiscoreResult) {
    this.hiscore.next(newPlayer);
  }

}
