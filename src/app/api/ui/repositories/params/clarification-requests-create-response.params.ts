import { ClarificationRequestsCreateResponse$Params } from '../../../swagger/fn/clarification-requests/clarification-requests-create-response';
import { ClarificationResponseCreate } from '../../models/clarification-response-create.interface';
import { adaptApiClarificationResponseCreateDto } from '../../adapters/toDto/api-clarification-response-create-dto.adapter';

export interface ClarificationRequestsCreateResponseParams {
  tradeId: number;
  clarificationRequestId: number;
  body?: ClarificationResponseCreate;
}

export const clarificationRequestsCreateResponseParamsAdapter = {
  adapt(params?: ClarificationRequestsCreateResponseParams): ClarificationRequestsCreateResponse$Params {
    if (!params) {
      return {} as ClarificationRequestsCreateResponse$Params;
    }
    return {
      tradeId: params.tradeId,
      clarificationRequestId: params.clarificationRequestId,
      body: adaptApiClarificationResponseCreateDto(params.body),
    };
  }
};
