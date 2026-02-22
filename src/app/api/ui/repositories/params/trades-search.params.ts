import { StarRequestAlt } from '../../models/star-request-alt.interface';
import { TradesSearch$Params } from '../../../swagger/fn/trades/trades-search';
import { apiStarRequestAltDtoAdapter } from '../../adapters/models/api-star-request.adapter';

// @ts-ignore
export interface TradesSearchParams {
  body?: StarRequestAlt;
}

export function tradesSearchAdapter(params?: TradesSearchParams): TradesSearch$Params {
  if (!params) {
    return {} as TradesSearch$Params;
  }
  return {
      body: apiStarRequestAltDtoAdapter(params.body),
  };
}
