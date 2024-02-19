import { ValidationErrors, AbstractControl } from '@angular/forms';


export class DateValidator {

static isDateValid(dd: string, mm: string, yyyy: string): boolean {
    const date = Number(dd);
    const month = Number(mm);
    const year = Number(yyyy);
    let flag = false;
    

    if ((month === 4 || month === 6 || month === 9 || month === 11) && date >= 31) {
      flag = true;
    }

    if (month === 2) {
      if (year % 4 !== 0) {
        if (date > 28) {
          flag = true;
        }
      }
      if (year % 4 === 0) {
        if (date > 29) {
          flag = true;
        }
      }
    }

    return flag;
  }


  static validYear(control: AbstractControl): ValidationErrors | null {
    if (control.value === '0000' && control.value.length > 0) {
            return { invalidDate: true };
    }
    return null;
  }

}

