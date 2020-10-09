import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HiscoreResult } from '../models/highscore.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HiscoreService {
  runeliteURL: string = 'https://api.runelite.net/runelite-1.6.28';
  private hiscore = new BehaviorSubject<HiscoreResult>(null);
  playerHiscore = this.hiscore.asObservable();

  private _isSkillProd: Subject<boolean> = null;
  isSkillProd = new BehaviorSubject<boolean>(false);
  public skillProdValues: string[] = [
    'cooking',
    'woodcutting',
    'fletching',
    'fishing',
    'firemaking',
    'crafting',
    'smithing',
    'mining',
    'herblore',
    'agility',
    'thieving',
    'slayer',
    'farming',
    'runecraft',
    'hunter',
    'construction',
  ];

  constructor(private http: HttpClient) {}

  getRuneLiteHS(endpoint: string, username: string): Observable<HiscoreResult> {
    const url = `${this.runeliteURL}/hiscore/${endpoint}?username=${username}`;
    return this.http.get<HiscoreResult>(url);
    // .pipe(
    //   tap(
    //     response => console.log(response)
    //   )
    // )
  }

  updateFoundPlayer(newPlayer: HiscoreResult) {
    this.hiscore.next(newPlayer);
  }

  toggleSkillProd(checked: boolean) {
    this.isSkillProd.next(checked);
  }
}
