import { Component, OnInit, Input, ChangeDetectorRef, Directive, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { HiscoreResult } from "../models/highscore.model";
import { HiscoreService } from "../services/hiscore.service";
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss']
})
export class HighscoresComponent implements OnInit {

  hiscore: HiscoreResult;
  public hiscoreLookup: FormGroup; 
  public loadingUser$ = new BehaviorSubject<boolean>(false);
  public userNotFound$ = new BehaviorSubject<boolean>(false);
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  lastUserName: string = null;

  constructor(private hiscoreService: HiscoreService, private formBuilder: FormBuilder) {
    this.hiscoreLookup = this.formBuilder.group({
      userName: []
    });
    this.hiscoreService.playerHiscore.subscribe(player => this.hiscore = player);
    this.userNotFound$.next(false);
   }

  async ngOnInit(): Promise<void> {
  }

  async populateHighscores() {
    if (!this.hiscoreLookup.get('userName').value) return;     
    this.lastUserName = this.hiscoreLookup.get('userName').value
    this.loadingUser$.next(true);
    this.hiscoreService.updateFoundPlayer(null)
    this.hiscoreService.getRuneLiteHS('LEAGUE', this.hiscoreLookup.get('userName').value).subscribe(
      result => {        
        this.hiscoreService.updateFoundPlayer(result)
      },
      (error) => this.userNotFound$.next(true),
      () => this.userNotFound$.next(false),
    ).add(
      () => this.loadingUser$.next(false)
    );
  }

  Number(input: String) {
    return Number(input).toLocaleString("en");
  }

}