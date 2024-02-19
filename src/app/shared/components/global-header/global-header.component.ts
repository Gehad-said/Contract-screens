import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HelpModel } from '../../models/help-model';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent {

  helpModel: HelpModel;
  toggle: boolean = false;
  searchTerm: string = '';
  @Input() fullUserName: string = '';
  @Input() userRole: string = '';

  constructor(private router: Router) {
    this.helpModel = {
      title: 'Help',
      content: 'This will now open your email client and create new message with help request to the following email:',
      firstBtn: 'Open Email',
      secondBtn: 'Cancel',
    };
  }

  openDialog(): void {
    this.toggle = !this.toggle;
  }

  changeToggleState($event: boolean): void {
    this.toggle = $event;
  }

}
