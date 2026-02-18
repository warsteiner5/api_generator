import { StarRequestAlt } from '../../models/star-request-alt.interface';
import { TradesSearch$Params } from '../../../swagger/fn/trades/trades-search';
import { adaptApiStarRequestAltDto } from '../../adapters/toDto/api-star-request.adapter';

export interface TradesSearchParams {
  body?: StarRequestAlt;
}

export const tradesSearchParamsAdapter = {
  adapt(params?: TradesSearchParams): TradesSearch$Params {
    if (!params) {
      return {} as TradesSearch$Params;
    }
    return {
      body: adaptApiStarRequestAltDto(params.body),
    };
  }
};
