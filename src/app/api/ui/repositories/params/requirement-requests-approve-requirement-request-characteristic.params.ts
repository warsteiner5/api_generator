import { RequirementRequestsApproveRequirementRequestCharacteristic$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-approve-requirement-request-characteristic';

export interface RequirementRequestsApproveRequirementRequestCharacteristicParams {
  characteristicId: number;
}

export const requirementRequestsApproveRequirementRequestCharacteristicParamsAdapter = {
  adapt(params?: RequirementRequestsApproveRequirementRequestCharacteristicParams): RequirementRequestsApproveRequirementRequestCharacteristic$Params {
    if (!params) {
      return {} as RequirementRequestsApproveRequirementRequestCharacteristic$Params;
    }
    return {
      characteristicId: params.characteristicId,
    };
  }
};
