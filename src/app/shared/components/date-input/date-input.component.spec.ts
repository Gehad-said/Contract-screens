import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputComponent } from './date-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MockDxcTextInputComponent } from '@shared/mock-components/mock-dxc-text-input';
import { MockDxcSelectComponent } from '@shared/mock-components/mock-dxc-select';

describe('DateInputComponent', () => {
  let component: DateInputComponent;
  let fixture: ComponentFixture<DateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DateInputComponent, MockDxcTextInputComponent, MockDxcSelectComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initDateForm', () => {
    component.initDateForm();
    expect(component.dateForm.controls.day.value).toEqual('');
    expect(component.dateForm.controls.month.value).toEqual('');
    expect(component.dateForm.controls.year.value).toEqual('');
  });

  it('should get format Date', () => {
    component.dateForm.controls.day.setValue('01');
    component.dateForm.controls.month.setValue('03');
    component.dateForm.controls.year.setValue('2023');
    component.formatDate();
    expect(component.formattedDate).toEqual('2023-03-01');
    expect(component.isDateNotValid).toBeFalse();
  });

  it('should pad day with zeroes', () => {
    component.pad_with_zeroes('1');
    expect(component.dateForm.controls.day.value).toEqual('01');
  });

  it('should set Select Value', () => {
    const formControl = component.dateForm.controls.month;
    component.setSelectValue(formControl, '02');
    expect(component.dateForm.controls.month.value).toEqual('02');
  });
});
