import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  sizes: { [key: string]: string } = {
    xxsmall: '--type-scale-01',
    xsmall: '--type-scale-02',
    small: '--type-scale-03',
    medium: '--type-scale-04',
    large: '--type-scale-05',
    xlarge: '--type-scale-06',
    xxlarge: '--type-scale-07',     
    xxxlarge: '--type-scale-08',
  };
  @Input() icon: string = '';
  @Input() size: string = 'small';

  get styles(): { [key: string]: string } {
    return {
      'min-height': `var(${this.sizes[this.size]})`,
      height: `100%`,
      width: `var(${this.sizes[this.size]})`,
    };
  }
}
