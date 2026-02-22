import { RequirementRequest } from '../../models/requirement-request.interface';
import { RequirementRequestsSaveAsDraft$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-save-as-draft';
import { apiRequirementRequestDtoAdapter } from '../../adapters/models/api-requirement-request-dto.adapter';

// @ts-ignore
export interface RequirementRequestsSaveAsDraftParams {
  body?: RequirementRequest;
}

export function requirementRequestsSaveAsDraftAdapter(params?: RequirementRequestsSaveAsDraftParams): RequirementRequestsSaveAsDraft$Params {
  if (!params) {
    return {} as RequirementRequestsSaveAsDraft$Params;
  }
  return {
      body: apiRequirementRequestDtoAdapter(params.body),
  };
}
