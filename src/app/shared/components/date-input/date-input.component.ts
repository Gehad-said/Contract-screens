import { Component, OnInit, OnDestroy, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { Option } from '@dxc-technology/halstack-angular';
import { LimitCharacters, onSelectChange } from '../../utils/helper/helpers';
import { NumbersValidator } from '../../validators/numbers.validator';
import { DateValidator } from '../../validators/date.validator';
import { months } from '../../const/month.const';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements OnChanges, OnInit, OnDestroy {
  dateForm!: FormGroup;
  dateErrorInvalid: ValidationErrors = { invalidDate: true };
  submmited: boolean = false;
  monthOptions: Option[] = months;
  isDateNotValid: boolean = false;
  formattedDate: string = '';
  subscription: Subscription = new Subscription();
  @Input() clearFilters?: boolean = false;
  @Output() dateValue = new EventEmitter();
  @Input() paramsValue: string | undefined = '';
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initDateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['paramsValue']?.currentValue) {
      this.initDateForm();
    }
    
    if (this.clearFilters) {
      this.dateForm.controls['day'].setValue('');
      this.dateForm.controls['month'].setValue([]);
      this.dateForm.controls['year'].setValue('');
      this.dateForm.controls['day'].markAsUntouched();
      this.dateForm.controls['month'].markAsUntouched();
      this.dateForm.controls['year'].markAsUntouched();
    }
  }

  initDateForm(): void {
    this.dateForm = this.formBuilder.group({
      day: [
        this.paramsValue ? this.paramsValue.split('-')[2] : '',
        [Validators.required, NumbersValidator.range(1, 31)],
      ],
      month: [this.paramsValue ? this.paramsValue.split('-')[1] : '', Validators.required],
      year: [
        this.paramsValue ? this.paramsValue.split('-')[0] : '',
        [Validators.required, Validators.maxLength(4), Validators.minLength(4), DateValidator.validYear],
      ],
    });
    this.subscription = this.dateForm.valueChanges.subscribe(() => this.formatDate());
  }

  formatDate(): void {
    const day = this.dateForm.get('day')?.value;
    const month = this.dateForm.get('month')?.value;
    const year = this.dateForm.get('year')?.value;

    this.isDateNotValid = DateValidator.isDateValid(day, month, year);

    if (this.dateForm.valid && !this.isDateNotValid && day && month && year) {
      const unformattedDate: string[] = [year, month, day];
      this.formattedDate = unformattedDate.join('-');
    } else {
      this.formattedDate = '';
    }
    this.dateValue.emit(this.formattedDate);
  }

  limitCharacters(event: any, value: string, limit: number): void {
    if (event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) {
      event.preventDefault();
    } else {
      LimitCharacters(event, value, limit);
    }
  }

  setSelectValue(formControl: AbstractControl, value: string): void {
    onSelectChange(formControl, value);
  }

  pad_with_zeroes(day: string): void {
    if (Number(day) < 10 && Number(day) >= 1) {
      day = '0' + Number(day);
      this.dateForm.controls['day'].setValue(day, { emitEvent: false });
      this.formatDate();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
