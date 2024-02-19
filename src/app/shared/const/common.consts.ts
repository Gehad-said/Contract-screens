export const WorkPackagesConstants = {
  noWorkpackagesToDisplay: 'No work packages to display',
  viewWorkPackageBtn: 'View work package',
  highValueIndicator: 'high Value Indicator',
  noMyWorkpackagesToDisplay: 'No work packages are assigned to you',
  dueDate: 'Due date',
  workPackageLabel: 'Work package',
  grouppedSubmission: 'groupped submission',
  searchMessage: 'Enter search criteria to view work packages',
  noSearchWorkpackages: 'No work packages match the search criteria',
  exceedSearchResult: 'Maximum results exceeded. Please refine criteria',
};

export const labels = {
  teamBasket: 'Team basket',
};

export const filterConstants = {
  broker: 'BROKER_POLICY',
  slip: 'SLIP_POLICY',
  select: 'Select',
  all: 'ALL',
  myWorkUrl: '/my-work',
};

export enum TAB_ID {
  UNALLOCATED_TAB = '1',
  ALLOCATED_TAB = '2',
  MY_WORK_TAB = '3',
  SEARCH_TAB = '4',
}
export const REASON_TYPE_ALLOCATE = [
  'HAVE NOT GOT RIGHT SKILL SET',
  'UPDATED BROKER INFORMATION',
  'REQUIRES CORRECTION',
  'INSUFFICIENT RESOURCE',
  'PART AND PART',
  'OP SIGNED AP RESORTED',
  'PROCESSING OFFSHORE',
  'AWAITING OUTSTANDING QUERY RESPONSE',
];
export const REASON_TYPE_REASSIGN = [
  'HAVE NOT GOT RIGHT SKILL SET',
  'PART AND PART',
  'SLA BALANCING',
  'OUT OF TIME',
  'OP SIGNED AP RESORTED',
  'AWAITING OUTSTANDING QUERY RESPONSE',
];

export const unallocatedWorkpackagesColumnKeys = [
  'uniqueMarketReferenceNumber',
  'presentationDate',
  'urgent',
  'refTypeOfSubmission',
  'opOrFdoLpanCount',
  'apRpLpanCount',
  'refTypeOfProcessingRequired',
  'status',
  'workPackageReference',
  'processingGroupReference',
  'processingNumberInGroup',
  'dueDate',
];

export const allocatedWorkpackagesColumnKeys = [
  'uniqueMarketReferenceNumber',
  'presentationDate',
  'urgent',
  'allocateeName',
  'refTypeOfSubmission',
  'opOrFdoLpanCount',
  'apRpLpanCount',
  'refTypeOfProcessingRequired',
  'status',
  'workPackageReference',
  'processingGroupReference',
  'processingNumberInGroup',
  'dueDate',
];

export const myWorkpackagesColumnKeys = [
  'uniqueMarketReferenceNumber',
  'presentationDate',
  'urgent',
  'refTypeOfSubmission',
  'opOrFdoLpanCount',
  'apRpLpanCount',
  'refTypeOfProcessingRequired',
  'status',
  'workPackageReference',
  'processingGroupReference',
  'processingNumberInGroup',
  'dueDate',
];

export const notesLabels = {
  ADD_NOTE: 'Add note',
  SUBJECT: 'Subject',
  ADD: 'Add',
  NOTE: 'Note',
  NOTES: 'Notes',
  SIGNING_CLARIFICATION: 'Signing clarification',
  CANCEL: 'Cancel',
  CLOSE: 'Close',
  SAVE: 'Save',
  SUBMIT: 'Submit',
  VALIDATION_ERROR_MSG: 'Note must be entered and cannot be left blank',
  REJECT_NOTE_ERROR_MSG: 'Rejection note must be entered and cannot be left blank',
  ONHOLD_NOTE_ERROR_MSG: 'A note must be entered and cannot be left blank',
  ONHOLD_SELECT_ERROR_MSG: 'Reason must be selected and cannot be left blank',
};

export const sAndaWorkpackageConstants = {
  BINDING_AUTHORITY: 'BINDING_AUTHORITY',
  PREMIUM_AND_POLICY_PROCESSING: 'PREMIUM_AND_POLICY_PROCESSING',
  POLICY_ONLY: 'POLICY_ONLY',
  POLICY_ENDORSEMENT_REV: 'POLICY_ENDORSEMENT_REV',
  NPE_REVIEW: 'NPE_REVIEW',
  policy: 'Policy',
};
