import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';

import { Observable } from 'rxjs';


@Component({
  selector: 'td-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {


  isDarkTheme: Observable<boolean>;
  
  constructor(private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit() {
    
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

}
