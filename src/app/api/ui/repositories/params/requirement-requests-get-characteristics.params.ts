import { RequirementRequestsGetCharacteristics$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-characteristics';

// @ts-ignore
export interface RequirementRequestsGetCharacteristicsParams {
  characteristicIds: string;
}

export function requirementRequestsGetCharacteristicsAdapter(params?: RequirementRequestsGetCharacteristicsParams): RequirementRequestsGetCharacteristics$Params {
  if (!params) {
    return {} as RequirementRequestsGetCharacteristics$Params;
  }
  return {
      characteristicIds: params.characteristicIds,
  };
}
