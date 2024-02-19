import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class NumbersValidator {

    static range(min: number, max: number): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
      const value = control?.value?.toString();
      let numberValue: number = 0;
      let lastDecimalNumber: number = 0;
      if (value?.includes('.')) {
        numberValue = +value.split('.')[0];
        const decimalNumbers = value.split('.')[1];
        lastDecimalNumber = parseInt(decimalNumbers[decimalNumbers.length - 1], 10);
      }
      if (control?.dirty && min < max) {
        if (
          control.value &&
          (control.value < min ||
            control.value > max ||
            (numberValue === max && lastDecimalNumber !== 0) ||
            value.includes('-0'))
        ) {
          return { invalidDate: true, requiredMinValue: min.toFixed(), requiredMaxValue: max.toFixed() };
        }
      }
      return null;
    };
  }
  
}
