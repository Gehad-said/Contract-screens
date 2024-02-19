import { PolicyDetails } from '@dxc.lm.sdk.angular/premiums-base-workflow-experience-api';

export const mockPolicyEndorsementValues: any = {
  policyId: 'd34d569e-ec14-4541-8faa-bc47feeed6b5',
  policyMedia: '22264607-56f0-480f-b90a-50258f35515d',
  refPolicyJackId: '22264607-56f0-480f-b90a-50258f35517d',
  policyJacketOther: 'string',
  numberOfOriginals: 1,
  numberOfCopies: 2,
  policyProducerCode: '22264607-56f0-480f-b90a-50258f35516d',
  endorsement: true,
  signingRequired: false,
  attestationClause: true,
  pre0107SecondLeaving: false,
  illinois: false,
  extract: false,
  specialInstructions: 'no special instructions',
  policyTechRequired: true,
  signatures: [
    {
      signingNumber: 'TBD',
      riskCodeAndSchedule: 'TBD',
      attach: true,
      where: 'TBD',
    },
  ],

  filesToBePrinted: [
    {
      filePathAndName: '/pathtofilewewanttoprint/filename',
    },
  ],

  signatureClarification: 'signatures all present',
  imrChecked: true,
};
export const mappedPolicyEndorment: PolicyDetails = {
  endorsement: true,
  signingRequired: false,
  technicianRequestedQc: true,
  policyId: 'd34d569e-ec14-4541-8faa-bc47feeed6b5',
};
export const mappedPolicy: PolicyDetails = {
  endorsement: false,
  signingRequired: false,
  policyId: 'd34d569e-ec14-4541-8faa-bc47feeed6b5',
  technicianRequestedQc: true,
};
export const mockPolicySigningAndEndorsmentValues: PolicyDetails = {
  refPolicyMediaId: '22264607-56f0-480f-b90a-50258f35515d',
  policyId: 'd34d569e-ec14-4541-8faa-bc47feeed6b5',
  numberOfOriginals: 1,
  numberOfCopies: 2,
  refPolicyProducerCodeId: '22264607-56f0-480f-b90a-50258f35516d',
  endorsement: true,
  signingRequired: true,
  attestationClause: true,
  illinois: false,
  extract: false,
  specialInstructions: 'no special instructions',
  technicianRequestedQc: true,
  filesToBePrinted: {
    fileToBePrinted: [
      {
        filePathAndName: '/pathtofilewewanttoprint/filename',
      },
    ],
  },
};
export const mockPolicySigningValues: PolicyDetails = {
  policyId: 'd34d569e-ec14-4541-8faa-bc47feeed6b5',
  refPolicyMediaId: '22264607-56f0-480f-b90a-50258f35515d',
  refPolicyJackId: '22264607-56f0-480f-b90a-50258f35517d',
  policyJacketOther: 'string',
  numberOfOriginals: 1,
  numberOfCopies: 2,
  refPolicyProducerCodeId: '22264607-56f0-480f-b90a-50258f35516d',
  endorsement: false,
  signingRequired: true,
  pre0107SecondLeaving: false,
  illinois: false,
  extract: false,
  specialInstructions: 'no special instructions',
  technicianRequestedQc: true,
  signatures: {
    signature: [
      {
        signingNumber: 'TBD',
        riskCodeAndSchedule: 'TBD',
        attach: true,
        where: 'TBD',
      },
    ],
  },
  filesToBePrinted: {
    fileToBePrinted: [
      {
        filePathAndName: '/pathtofilewewanttoprint/filename',
      },
    ],
  },
};
