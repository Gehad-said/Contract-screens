import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HelpModel } from '../../models/help-model';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent {
  visible: boolean = false;
  @Input() toggle: boolean = false;
  @Input() helpModel: HelpModel;
  @Output() emmitToggle: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.helpModel = {
      title: '',
      content: '',
      firstBtn: '',
      secondBtn: '',
    };
  }

  openDialog(): void {
    this.toggle = !this.toggle;
    this.emmitToggle.emit(this.toggle);
  }
}
