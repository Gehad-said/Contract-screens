import { ValidationErrorMessage } from '@shared/models/interfaces';

export const VALIDATION_ERROR_MESSAGES: ValidationErrorMessage = {
  required: {
    message: 'INPUTS.INVALID.REQUIRED',
  },
  invalidDate: {
    message: 'INPUTS.INVALID.INVALID',
  },
  alphaNumericOnly: {
    message: 'INPUTS.INVALID.ALPHA_NUM_ONLY',
  },
  minlength: {
    message: 'INPUTS.INVALID.MIN',
  },
  maxlength: {
    message: 'INPUTS.INVALID.MAX',
  },
  requiredToDateRange: {
    message: 'INPUTS.INVALID.REQUIRED',
  },
  requiredFromDateRange: {
    message: 'INPUTS.INVALID.REQUIRED',
  },
  requiredReference: {
    message: 'INPUTS.INVALID.REF_REQUIRED',
  },
  format: {
    message: 'INPUTS.INVALID.WRONG_FORMAT',
  },
};
