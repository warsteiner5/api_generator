import { RequirementRequestsRejectRequirementRequestCharacteristic$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-reject-requirement-request-characteristic';

export interface RequirementRequestsRejectRequirementRequestCharacteristicParams {
  characteristicId: number;
}

export const requirementRequestsRejectRequirementRequestCharacteristicParamsAdapter = {
  adapt(params?: RequirementRequestsRejectRequirementRequestCharacteristicParams): RequirementRequestsRejectRequirementRequestCharacteristic$Params {
    if (!params) {
      return {} as RequirementRequestsRejectRequirementRequestCharacteristic$Params;
    }
    return {
      characteristicId: params.characteristicId,
    };
  }
};
