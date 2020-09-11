import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators'
import { HiscoreResult } from '../models/highscore.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighscoresService {

  runeliteURL: string = "https://api.runelite.net/runelite-1.6.26.1";

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

}
