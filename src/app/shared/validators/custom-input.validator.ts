import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function marketReferenceValidator(): ValidatorFn {
  const formatPattern = /^[bB]\d{4}[a-zA-Z0-9]*$/;
  const alphaNumericPattern = /^[a-zA-Z0-9]*$/;
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValidFormat = formatPattern.test(control.value);
    const isAlphaNumeric = alphaNumericPattern.test(control.value);

    if (!control.value) {
      return null;
    }

    if (!isAlphaNumeric) {
      return { alphaNumericOnly: true };
    } else if (!isValidFormat) {
      return { format: true };
    } else {
      return null;
    }
  };
}

export function packageReferenceValidator(): ValidatorFn {
  const pattern = /^[a-zA-Z0-9]*$/;
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = pattern.test(control.value);
    if (!control.value) {
      return null;
    }
    return isValid ? null : { alphaNumericOnly: true };
  };
}

export function customSearchFilterFormValidator(): ValidationErrors | null {
  return (formGroup: FormGroup): ValidationErrors | null => {
    const currentDate = getCurrentFormattedDate();
    const { marketReference, packageReference, toDate, fromDate, processingGroupReference } = formGroup.value;

    if (!marketReference && !packageReference && !fromDate && !toDate && !processingGroupReference) {
      return { missingUmrWprPgrOrDates: true };
    }

    if ((fromDate && !toDate) || new Date(toDate) > new Date(currentDate)) {
      return { invalidFutureDate: true };
    }

    if (!fromDate && toDate) {
      return { requiredFromDateRange: true };
    }

    if (fromDate && toDate && new Date(fromDate) > new Date(toDate)) {
      return { invalidDateRange: true };
    }

    return null;
  };
}

export function getCurrentFormattedDate(): string {
  const date = new Date();
  return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
}
