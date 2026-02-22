import { PriceReductionRequestAlt } from '../../models/price-reduction-request-alt.interface';
import { TradesCalculatePriceReduction$Params } from '../../../swagger/fn/trades/trades-calculate-price-reduction';
import { apiPriceReductionRequestAltDtoAdapter } from '../../adapters/models/api-price-reduction-request.adapter';

// @ts-ignore
export interface TradesCalculatePriceReductionParams {
  body?: PriceReductionRequestAlt;
}

export function tradesCalculatePriceReductionAdapter(params?: TradesCalculatePriceReductionParams): TradesCalculatePriceReduction$Params {
  if (!params) {
    return {} as TradesCalculatePriceReduction$Params;
  }
  return {
      body: apiPriceReductionRequestAltDtoAdapter(params.body),
  };
}
