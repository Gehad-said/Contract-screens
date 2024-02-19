import { FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { customSearchFilterFormValidator } from '@shared/validators/custom-input.validator';

type CustomValidatorFn = (formGroup: FormGroup) => { [key: string]: any } | null;

describe('CustomSearchFilterFormValidator', () => {
  let formGroup: FormGroup;
  let validatorFn: (formGroup: FormGroup) => ValidationErrors | null;

  beforeEach(() => {
    formGroup = new FormGroup({
      marketReference: new FormControl(''),
      packageReference: new FormControl(''),
      processingGroupReference: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
    });
    validatorFn = customSearchFilterFormValidator() as CustomValidatorFn;
  });

  it('should return error object if all fields are empty', () => {
    expect(validatorFn(formGroup)).toEqual({ missingUmrWprPgrOrDates: true });
  });

  it('should return error object if fromDate is missing', () => {
    formGroup.patchValue({
      marketReference: 'someValue',
      packageReference: 'someValue',
      processingGroupReference: '',
      fromDate: '',
      toDate: '2023-01-01',
    });
    expect(validatorFn(formGroup)).toEqual({ requiredFromDateRange: true });
  });

  it('should return error object if all filters are missing', () => {
    formGroup.patchValue({
      marketReference: '',
      packageReference: '',
      processingGroupReference: '',
      fromDate: '',
      toDate: '',
    });
    expect(validatorFn(formGroup)).toEqual({ missingUmrWprPgrOrDates: true });
  });

  it('should return error object for invalid future date', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);

    formGroup.patchValue({
      fromDate: '2023-01-01',
      toDate: futureDate.toISOString().split('T')[0],
    });
    expect(validatorFn(formGroup)).toEqual({ invalidFutureDate: true });
  });

  it('should return error object for invalid date range', () => {
    formGroup.patchValue({
      fromDate: '2023-01-02',
      toDate: '2023-01-01',
    });
    expect(validatorFn(formGroup)).toEqual({ invalidDateRange: true });
  });

  it('should return null for valid input', () => {
    formGroup.patchValue({
      marketReference: 'someValue',
      packageReference: 'someValue',
      processingGroupReference: 'somevalue',
      fromDate: '2023-01-01',
      toDate: '2023-01-02',
    });
    expect(validatorFn(formGroup)).toBeNull();
  });
});
