import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { DxcTextInputComponent, DxcTextareaComponent, DxcSelectComponent } from '@dxc-technology/halstack-angular';
import {
  AllocatedUsers,
  ExperienceSearchCriterias,
  ExperienceSearchObject,
  ReferenceData,
  PolicyDetails,
} from '@dxc.lm.sdk.angular/premiums-base-workflow-experience-api';
import { TeamBasket } from '../../../core/services/user-permissions/user-permissions.interface';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

// required for select input
export function onSelectChange(formControl: AbstractControl, value: string): void {
  formControl.markAsUntouched();
  // trim for space in 'Select' option
  const allValue = value === '\xa0' ? value : value?.trim();
  formControl.setValue(allValue);
}

// required for scroll up
export function ScrollUp(x: number, y: number): void {
  window.scroll(x, y);
}

// required for scroll to element
export function ScrollToElement(elementId: string): void {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView();
  }, 0.1);
}

// required for multi select input
export function onMultiSelectChange(formControl: AbstractControl, value: string[]): void {
  formControl.markAsUntouched();
  formControl.setValue(value);
}

// required for input validation status
export function ValidationInputStatus(
  submitted: boolean,
  formControl: AbstractControl,
  input: DxcTextInputComponent | DxcTextareaComponent
): false | ValidationErrors | null {
  return (submitted || (formControl?.errors?.['required'] ? formControl.touched : input.isDirty)) && formControl?.errors;
}

// required for select validation status
export function ValidationSelectStatus(
  submitted: boolean,
  formControl: AbstractControl,
  select: DxcSelectComponent
): boolean {
  return (
    (submitted || (formControl?.errors?.['required'] ? !select.isOpened && formControl?.touched : formControl.dirty)) &&
    formControl.invalid
  );
}

// required for formcontrol validation status exclude (DxcTextInput, DxcTextarea and DxcSelect)
export function ValidationFormControlStatus(submitted: boolean, formControl: AbstractControl): boolean {
  return (
    (submitted || (formControl?.errors?.['required'] ? formControl.touched : formControl.dirty)) && formControl.invalid
  );
}

// required for limiting characters
export function LimitCharacters(event: KeyboardEvent, value: string, limit: number): void {
  if (value.trim().length + 1 > limit) {
    event.preventDefault();
  }
}

export function noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
  return (control.value || '').trim().length ? null : { required: true };
}
// search criteria mapping to array
export function mapSearchCriteria(data: any): Array<ExperienceSearchObject> {
  const searchCriteria: ExperienceSearchObject[] = [];
  if (data.marketReference) {
    searchCriteria.push({
      fieldName: 'uniqueMarketReferenceNumber',
      operator: ExperienceSearchObject.OperatorEnum.CONTAINS,
      fieldValue: data.marketReference,
      fieldType: ExperienceSearchObject.FieldTypeEnum.STRING,
    });
  }

  if (data.workPackageReference) {
    searchCriteria.push({
      fieldName: 'workPackageReference',
      operator: ExperienceSearchObject.OperatorEnum.CONTAINS,
      fieldValue: data.workPackageReference,
      fieldType: ExperienceSearchObject.FieldTypeEnum.STRING,
    });
  }
  if (data.processingGroupReference) {
    searchCriteria.push({
      fieldName: 'processingGroupReference',
      operator: ExperienceSearchObject.OperatorEnum.CONTAINS,
      fieldValue: data.processingGroupReference,
      fieldType: ExperienceSearchObject.FieldTypeEnum.STRING,
    });
  }
  if (data.toDate) {
    searchCriteria.push({
      fieldName: 'presentationDate',
      operator: ExperienceSearchObject.OperatorEnum.LESSTHANEQ,
      fieldValue: data.toDate,
      fieldType: ExperienceSearchObject.FieldTypeEnum.DATETIME,
    });
  }

  if (data.fromDate) {
    searchCriteria.push({
      fieldName: 'presentationDate',
      operator: ExperienceSearchObject.OperatorEnum.GREATERTHANEQ,
      fieldValue: data.fromDate,
      fieldType: ExperienceSearchObject.FieldTypeEnum.DATETIME,
    });
  }

  return searchCriteria;
}

export function formatPresentationDate(searchCriteriasObj: ExperienceSearchCriterias): ExperienceSearchCriterias {
  const searchCriteriasObjCopy: any = cloneDeep(searchCriteriasObj);
  const updatedSearchCriteria = searchCriteriasObjCopy?.searchCriteria?.map((obj: any) => {
    // update to date with time stamp
    if (obj.fieldName === 'presentationDate' && obj.operator === ExperienceSearchObject.OperatorEnum.LESSTHANEQ) {
      const customDateTimeObj = obj.fieldValue + 'T' + '23:59:59' + 'Z';
      const customDateTime = new Date(customDateTimeObj);
      obj.fieldValue = customDateTime.toISOString();
    }
    // update from date with time stamp
    if (obj.fieldName === 'presentationDate' && obj.operator === ExperienceSearchObject.OperatorEnum.GREATERTHANEQ) {
      const customDateTimeObj = obj.fieldValue + 'T' + '00:00:01' + 'Z';
      const customDateTime = new Date(customDateTimeObj);
      obj.fieldValue = customDateTime.toISOString();
    }
    return obj;
  });
  searchCriteriasObjCopy.searchCriteria = updatedSearchCriteria;
  return searchCriteriasObjCopy;
}

export function getUpperCaseTokenUserName(username: string): string {
  const parts = username?.split('.');
  const firstName = parts?.[0] ? parts[0].substring(0, 3).toUpperCase() + parts[0].substring(3) : '';
  const lastName = parts?.[1] ? parts[1].charAt(0).toUpperCase() + parts[1].substring(1) : '';
  return `${firstName}\xa0${lastName}`;
}

export function mapTeamBasketToId(basket: string | undefined, teamBaskets: TeamBasket[]): string {
  let basketId = '';
  teamBaskets.forEach((val) => {
    if (val?.longcode === basket) {
      basketId = val.id;
    }
  });
  return basketId;
}

export function mapRefDataIdToName(id: string, refData: ReferenceData[]): string {
  let refDataName = '';
  refData.forEach((data) => {
    if (data.id === id) {
      refDataName = data.displayValue;
    }
  });
  return refDataName;
}

export function mapAllocateeIdToName(allocateeId: string, technicians: AllocatedUsers): string {
  const allocatee = technicians.find((val: any) => val.partyPersonId === allocateeId);
  return `${allocatee?.forename}\xa0${allocatee?.surname}`;
}

export function mapPolicyName(inputId: string | undefined, refData: any): string {
  const policyInput = refData.find((val: any) => val.id === inputId);
  if (policyInput) {
    return policyInput.code;
  } else {
    return '';
  }
}

export function shouldShow(fieldName: string, isEndorsement: boolean, isSigningRequired: boolean): boolean {
  switch (fieldName) {
    case 'refPolicyMediaId':
      return (isEndorsement && isSigningRequired) || (!isEndorsement && isSigningRequired);
    case 'refPolicyJackId':
      return !isEndorsement && isSigningRequired;
    case 'refPolicyProducerCodeId':
      return (isEndorsement && isSigningRequired) || (!isEndorsement && isSigningRequired);
    case 'numberOfOriginals':
      return (isEndorsement && isSigningRequired) || (!isEndorsement && isSigningRequired);
    case 'numberOfCopies':
      return (isEndorsement && isSigningRequired) || (!isEndorsement && isSigningRequired);
    case 'pre0107SecondLeaving':
      return !isEndorsement && isSigningRequired;
    case 'attestationClause':
      return isEndorsement && isSigningRequired;
    case 'illinois':
      return (isEndorsement && isSigningRequired) || (!isEndorsement && isSigningRequired);
    case 'extract':
      return (isEndorsement && isSigningRequired) || (!isEndorsement && isSigningRequired);
    case 'specialInstructions':
      return (isEndorsement && isSigningRequired) || (!isEndorsement && isSigningRequired);
    case 'signatures':
      return !isEndorsement && isSigningRequired;
    case 'filesToBePrinted':
      return (isEndorsement && isSigningRequired) || (!isEndorsement && isSigningRequired);
    default:
      return false;
  }
}
function cloneDeep(searchCriteriasObj: ExperienceSearchCriterias) {
  throw new Error('Function not implemented.');
}

