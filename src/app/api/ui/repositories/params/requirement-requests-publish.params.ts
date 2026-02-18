import { RequirementRequest } from '../../models/requirement-request.interface';
import { RequirementRequestsPublish$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-publish';
import { adaptApiRequirementRequestDto } from '../../adapters/toDto/api-requirement-request-dto.adapter';

export interface RequirementRequestsPublishParams {
  body?: RequirementRequest;
}

export const requirementRequestsPublishParamsAdapter = {
  adapt(params?: RequirementRequestsPublishParams): RequirementRequestsPublish$Params {
    if (!params) {
      return {} as RequirementRequestsPublish$Params;
    }
    return {
      body: adaptApiRequirementRequestDto(params.body),
    };
  }
};
