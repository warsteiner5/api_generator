import { RequirementRequestsGetCharacteristics$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-characteristics';

export interface RequirementRequestsGetCharacteristicsParams {
  characteristicIds: string;
}

export const requirementRequestsGetCharacteristicsParamsAdapter = {
  adapt(params?: RequirementRequestsGetCharacteristicsParams): RequirementRequestsGetCharacteristics$Params {
    if (!params) {
      return {} as RequirementRequestsGetCharacteristics$Params;
    }
    return {
      characteristicIds: params.characteristicIds,
    };
  }
};
