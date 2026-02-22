import { ClarificationRequestCreate } from '../../models/clarification-request-create.interface';
import { ClarificationRequestsCreateRequest$Params } from '../../../swagger/fn/clarification-requests/clarification-requests-create-request';
import { apiClarificationRequestCreateDtoAdapter } from '../../adapters/models/api-clarification-request-create-dto.adapter';

// @ts-ignore
export interface ClarificationRequestsCreateRequestParams {
  tradeId: number;
  body?: ClarificationRequestCreate;
}

export function clarificationRequestsCreateRequestAdapter(params?: ClarificationRequestsCreateRequestParams): ClarificationRequestsCreateRequest$Params {
  if (!params) {
    return {} as ClarificationRequestsCreateRequest$Params;
  }
  return {
      tradeId: params.tradeId,
      body: apiClarificationRequestCreateDtoAdapter(params.body),
  };
}
