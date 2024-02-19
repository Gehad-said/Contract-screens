import { ExperienceSearchCriterias } from '@dxc.lm.sdk.angular/premiums-base-workflow-experience-api';
import { formatPresentationDate, mapAllocateeIdToName, mapTeamBasketToId, mapPolicyName } from './helpers';
import { mockTeamBasketData } from 'src/app/utils/helper/mockTeamBasketData';
import {
  mappedPolicy,
  mappedPolicyEndorment,
  mockPolicyEndorsementValues,
  mockPolicySigningAndEndorsmentValues,
  mockPolicySigningValues,
} from './mock-complete-policy';
import { mockAllocatees } from 'src/app/utils/helper/mockWorkpackageOverview';

describe('presentation date', () => {
  const refData = [
    { id: 'b1b1b36d-5576-49ff-9d96-6cfeb996646e', code: 'K_SUISSE_1745A', category: 'RefPolicyJacket' },
    { id: '6a4565d3-cea9-44b2-b9d4-edbc3dc8c30f', code: 'PAPER', category: 'RefPolicyMedia' },
  ];

  it('should format from date and to date string to include time in the SearchCriteria object', () => {
    const searchCriteriaObj: ExperienceSearchCriterias = {
      searchCriteria: [
        {
          fieldName: 'uniqueMarketReferenceNumber',
          operator: 'CONTAINS',
          fieldValue: 'B0941UMRPVTST1',
          fieldType: 'STRING',
        },
        { fieldName: 'presentationDate', operator: 'LESS_THAN_EQ', fieldValue: '2023-06-20', fieldType: 'STRING' },
        { fieldName: 'presentationDate', operator: 'GREATER_THAN_EQ', fieldValue: '2022-04-20', fieldType: 'STRING' },
      ],
    };
    const updatedSearchCriteriaObj: ExperienceSearchCriterias = {
      searchCriteria: [
        {
          fieldName: 'uniqueMarketReferenceNumber',
          operator: 'CONTAINS',
          fieldValue: 'B0941UMRPVTST1',
          fieldType: 'STRING',
        },
        {
          fieldName: 'presentationDate',
          operator: 'LESS_THAN_EQ',
          fieldValue: '2023-06-20T23:59:59.000Z',
          fieldType: 'STRING',
        },
        {
          fieldName: 'presentationDate',
          operator: 'GREATER_THAN_EQ',
          fieldValue: '2022-04-20T00:00:01.000Z',
          fieldType: 'STRING',
        },
      ],
    };

    const result = formatPresentationDate(searchCriteriaObj);
    expect(result).toEqual(updatedSearchCriteriaObj);
  });

  it('should return the team basket object from the team baskets array matching the input basket longcode', () => {
    const mockBasket = 'PROCESSING_PREMIUM_LLOYDS_DIRECT_AVIATION';
    const mockTeamBaskets = mockTeamBasketData;
    const expectedResult = {
      effectiveDate: '2023-01-01',
      description: `Premium Lloyd's Direct Aviation`,
      id: 'dfc2804b-d49d-4a32-8604-75b79f40fcfd',
      code: 'IPOPLDA',
      longcode: 'PROCESSING_PREMIUM_LLOYDS_DIRECT_AVIATION',
      datasource: 'DEFAULT',
      refTypeOfPartyRole: 'INTSTFF',
      serviceType: 'IPOS',
      groupType: 'WORKBASKET',
    };
    const result = mapTeamBasketToId(mockBasket, mockTeamBaskets);
    expect(result).toEqual(expectedResult.id);
  });
  // it('should return form values with only endorsement true and Signing required false', () => {
  //   mockPolicyEndorsementValues.endorsement = true;
  //   const policyFromMapped = mapPolicyForm(mockPolicyEndorsementValues, mockPolicyEndorsementValues.policyId);
  //   expect(policyFromMapped).toEqual(mappedPolicyEndorment);
  // });
  // it('should return form values with only endorsement false and Signing required false', () => {
  //   mockPolicyEndorsementValues.endorsement = false;
  //   const policyFromMapped = mapPolicyForm(mockPolicyEndorsementValues, mockPolicyEndorsementValues.policyId);
  //   expect(policyFromMapped).toEqual(mappedPolicy);
  // });
  // // TO BE FIXED AND CONFIRMED AS FURTHER CHANGES COMING
  // xit('should return form values with only endorsement true and Signing required true', () => {
  //   mockPolicyEndorsementValues.endorsement = true;
  //   mockPolicyEndorsementValues.signingRequired = true;
  //   const policyFromMapped = mapPolicyForm(mockPolicyEndorsementValues, mockPolicyEndorsementValues.policyId);
  //   expect(policyFromMapped).toEqual(mockPolicySigningAndEndorsmentValues);
  // });
  // // TO BE FIXED AND CONFIRMED AS FURTHER CHANGES COMING
  // xit('should return form values with only endorsement false and Signing required true', () => {
  //   mockPolicyEndorsementValues.endorsement = false;
  //   mockPolicyEndorsementValues.signingRequired = true;
  //   const policyFromMapped = mapPolicyForm(mockPolicyEndorsementValues, mockPolicyEndorsementValues.policyId);
  //   expect(policyFromMapped).toEqual(mockPolicySigningValues);
  // });

  it('should return the allocatee partyPersonId from the allocatees array matching the input allocatee name', () => {
    const mockAllocateeId = 'f96cd869-2f1d-4b01-80e6-e1c15fd76671';
    const result = mapAllocateeIdToName(mockAllocateeId, mockAllocatees);
    expect(result).toEqual('PRTeam\xa0Leader02');
  });

  it('should return the policy code for a valid inputId', () => {
    const inputId = '6a4565d3-cea9-44b2-b9d4-edbc3dc8c30f';
    const result = mapPolicyName(inputId, refData);
    expect(result).toEqual('PAPER');
  });

  it('should return an empty string for an inputId not found in refData', () => {
    const inputId = '6a4565d3-cea9-44b2-b9d4-edbc3dc77777';
    const result = mapPolicyName(inputId, refData);
    expect(result).toBe('');
  });
});
