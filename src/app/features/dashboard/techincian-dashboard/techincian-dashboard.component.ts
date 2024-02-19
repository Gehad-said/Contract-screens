import { Component, Inject, OnInit } from '@angular/core';
import { ThemeService } from '@dxc-technology/halstack-angular';
import { customTheme } from 'src/assets/styles/standardTheme';

@Component({
  selector: 'app-techincian-dashboard',
  templateUrl: './techincian-dashboard.component.html',
  styleUrls: ['./techincian-dashboard.component.scss']
})
export class TechincianDashboardComponent implements OnInit {

  constructor(@Inject('ThemeService') private themeService: ThemeService){ }

  ngOnInit(): void {
    this.themeService.registerTheme(customTheme);
  }

}
