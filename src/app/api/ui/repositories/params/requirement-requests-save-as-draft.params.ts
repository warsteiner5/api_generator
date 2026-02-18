import { RequirementRequest } from '../../models/requirement-request.interface';
import { RequirementRequestsSaveAsDraft$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-save-as-draft';
import { adaptApiRequirementRequestDto } from '../../adapters/toDto/api-requirement-request-dto.adapter';

export interface RequirementRequestsSaveAsDraftParams {
  body?: RequirementRequest;
}

export const requirementRequestsSaveAsDraftParamsAdapter = {
  adapt(params?: RequirementRequestsSaveAsDraftParams): RequirementRequestsSaveAsDraft$Params {
    if (!params) {
      return {} as RequirementRequestsSaveAsDraft$Params;
    }
    return {
      body: adaptApiRequirementRequestDto(params.body),
    };
  }
};
