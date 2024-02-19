export enum INPUT_TYPES {
  NUMBER = 'number',
  BEGIN_ALPHA = 'characters',
}

export enum ERROR_TYPES {
  MIN_LENGTH = 'minlength',
  MAX_LENGTH = 'maxlength',
  REQUIRED = 'required',
}

export enum SELECT_OPTION_TYPES {
  REF_CLASS_OF_BUSINESS = 'refClassOfBusiness',
  REF_TYPE_OF_MARKET = 'refTypeOfMarket',
  REF_TYPE_OF_SLIP = 'refTypeOfSlip',
  REF_TYPE_OF_POLICY = 'refTypeOfPolicy',
  REF_CHANNEL = 'refChannel',
}

export enum ACTION_TYPES {
  EDIT = 'EDIT',
  PERFORM = 'PERFORM',
  TRACKIN = 'TRACKIN',
  REASSIGN = 'REASSIGN',
  ALLOCATE = 'ALLOCATE',
  COMPLETE = 'COMPLETE',
  AUTOASSIGN = 'AUTOASSIGN',
}

export enum WORKPACKAGE_ACTIONS {
  REJECT = 'REJECT',
  ON_HOLD = 'ON_HOLD',
}
