import { ClarificationRequestCreate } from '../../models/clarification-request-create.interface';
import { ClarificationRequestsCreateRequest$Params } from '../../../swagger/fn/clarification-requests/clarification-requests-create-request';
import { adaptApiClarificationRequestCreateDto } from '../../adapters/toDto/api-clarification-request-create-dto.adapter';

export interface ClarificationRequestsCreateRequestParams {
  tradeId: number;
  body?: ClarificationRequestCreate;
}

export const clarificationRequestsCreateRequestParamsAdapter = {
  adapt(params?: ClarificationRequestsCreateRequestParams): ClarificationRequestsCreateRequest$Params {
    if (!params) {
      return {} as ClarificationRequestsCreateRequest$Params;
    }
    return {
      tradeId: params.tradeId,
      body: adaptApiClarificationRequestCreateDto(params.body),
    };
  }
};
