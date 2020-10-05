import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog'
import { ThemeService } from './core/services/theme.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Leagues Tracker';

  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService, public dialog: MatDialog) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

    if (window.matchMedia("(orientation: portrait)").matches && window.innerWidth < 800) {
      this.dialog.open(DialogElementsPortraitCheck);
    }
  }
}

@Component({
  selector: 'dialog-elements-portrait-check',
  templateUrl: 'dialog-elements-portrait-check.html',
})
export class DialogElementsPortraitCheck {}