import { RequirementRequestsRejectRequirementRequestCharacteristic$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-reject-requirement-request-characteristic';

// @ts-ignore
export interface RequirementRequestsRejectRequirementRequestCharacteristicParams {
  characteristicId: number;
}

export function requirementRequestsRejectRequirementRequestCharacteristicAdapter(params?: RequirementRequestsRejectRequirementRequestCharacteristicParams): RequirementRequestsRejectRequirementRequestCharacteristic$Params {
  if (!params) {
    return {} as RequirementRequestsRejectRequirementRequestCharacteristic$Params;
  }
  return {
      characteristicId: params.characteristicId,
  };
}
