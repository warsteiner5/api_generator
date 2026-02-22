import { ClarificationRequestsCreateResponse$Params } from '../../../swagger/fn/clarification-requests/clarification-requests-create-response';
import { ClarificationResponseCreate } from '../../models/clarification-response-create.interface';
import { apiClarificationResponseCreateDtoAdapter } from '../../adapters/models/api-clarification-response-create-dto.adapter';

// @ts-ignore
export interface ClarificationRequestsCreateResponseParams {
  tradeId: number;
  clarificationRequestId: number;
  body?: ClarificationResponseCreate;
}

export function clarificationRequestsCreateResponseAdapter(params?: ClarificationRequestsCreateResponseParams): ClarificationRequestsCreateResponse$Params {
  if (!params) {
    return {} as ClarificationRequestsCreateResponse$Params;
  }
  return {
      tradeId: params.tradeId,
      clarificationRequestId: params.clarificationRequestId,
      body: apiClarificationResponseCreateDtoAdapter(params.body),
  };
}
