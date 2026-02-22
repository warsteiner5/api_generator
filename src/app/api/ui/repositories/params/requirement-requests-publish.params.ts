import { RequirementRequest } from '../../models/requirement-request.interface';
import { RequirementRequestsPublish$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-publish';
import { apiRequirementRequestDtoAdapter } from '../../adapters/models/api-requirement-request-dto.adapter';

// @ts-ignore
export interface RequirementRequestsPublishParams {
  body?: RequirementRequest;
}

export function requirementRequestsPublishAdapter(params?: RequirementRequestsPublishParams): RequirementRequestsPublish$Params {
  if (!params) {
    return {} as RequirementRequestsPublish$Params;
  }
  return {
      body: apiRequirementRequestDtoAdapter(params.body),
  };
}
