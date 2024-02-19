import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Option, ThemeService } from '@dxc-technology/halstack-angular';
import { customTheme } from 'src/assets/styles/standardTheme';

@Component({
  selector: 'app-treaty-slip',
  templateUrl: './treaty-slip.component.html',
  styleUrls: ['./treaty-slip.component.scss']
})
export class TreatySlipComponent implements OnInit {

  formData = new FormGroup ({
    uniqueMarketRef: new FormControl(''),
    treatyNumber: new FormControl(''),

  })
  
  array1: Option[] = [
    { label: '2024', value: 'Underwriting 1' },
    { label: '2023', value: 'Underwriting 2' },
    { label: '2022', value: 'Underwriting 3' },
  ];
  constructor(@Inject('ThemeService') private themeService: ThemeService){ }

  submit() {
    console.log();
    
  }

  ngOnInit(): void {
    this.themeService.registerTheme(customTheme);
  }

}
