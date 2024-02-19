import { Option } from '@dxc-technology/halstack-angular';
import { WORKPACKAGE_ACTIONS } from './types';

export const WorkpackageActions: Option[] = [
  {
    value: WORKPACKAGE_ACTIONS.ON_HOLD,
    label: 'On Hold',
  },
  {
    value: WORKPACKAGE_ACTIONS.REJECT,
    label: 'Reject',
  },
];
