import { RequirementRequestsApproveRequirementRequestCharacteristic$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-approve-requirement-request-characteristic';

// @ts-ignore
export interface RequirementRequestsApproveRequirementRequestCharacteristicParams {
  characteristicId: number;
}

export function requirementRequestsApproveRequirementRequestCharacteristicAdapter(params?: RequirementRequestsApproveRequirementRequestCharacteristicParams): RequirementRequestsApproveRequirementRequestCharacteristic$Params {
  if (!params) {
    return {} as RequirementRequestsApproveRequirementRequestCharacteristic$Params;
  }
  return {
      characteristicId: params.characteristicId,
  };
}
