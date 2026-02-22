import { DealsDoNotConcludeDeal$Params } from '../../../swagger/fn/deals/deals-do-not-conclude-deal';
import { DoNotConcludeDealRequest } from '../../models/do-not-conclude-deal-request.interface';
import { apiDoNotConcludeDealRequestDtoAdapter } from '../../adapters/models/api-do-not-conclude-deal-request-dto.adapter';

// @ts-ignore
export interface DealsDoNotConcludeDealParams {
  body?: DoNotConcludeDealRequest;
}

export function dealsDoNotConcludeDealAdapter(params?: DealsDoNotConcludeDealParams): DealsDoNotConcludeDeal$Params {
  if (!params) {
    return {} as DealsDoNotConcludeDeal$Params;
  }
  return {
      body: apiDoNotConcludeDealRequestDtoAdapter(params.body),
  };
}
