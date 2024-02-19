import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <div class="icon_wrapper">
      <div class="icon_wrapper__container">
        <div class="icon" [ngClass]="['icon-' + icon, 'icon--' + size]"></div>
      </div>
    </div>
  `,
  styles: [],
})
export class MockIconComponent {

  @Input() icon: string = '';
  @Input() size: string = 'small';

}
