import { PriceReductionRequestAlt } from '../../models/price-reduction-request-alt.interface';
import { TradesCalculatePriceReduction$Params } from '../../../swagger/fn/trades/trades-calculate-price-reduction';
import { adaptApiPriceReductionRequestAltDto } from '../../adapters/toDto/api-price-reduction-request.adapter';

export interface TradesCalculatePriceReductionParams {
  body?: PriceReductionRequestAlt;
}

export const tradesCalculatePriceReductionParamsAdapter = {
  adapt(params?: TradesCalculatePriceReductionParams): TradesCalculatePriceReduction$Params {
    if (!params) {
      return {} as TradesCalculatePriceReduction$Params;
    }
    return {
      body: adaptApiPriceReductionRequestAltDto(params.body),
    };
  }
};
