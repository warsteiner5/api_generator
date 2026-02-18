import { DealsGetLastDealFullPriceChange$Params } from '../../../swagger/fn/deals/deals-get-last-deal-full-price-change';

export interface DealsGetLastDealFullPriceChangeParams {
  dealId: number;
}

export const dealsGetLastDealFullPriceChangeParamsAdapter = {
  adapt(params?: DealsGetLastDealFullPriceChangeParams): DealsGetLastDealFullPriceChange$Params {
    if (!params) {
      return {} as DealsGetLastDealFullPriceChange$Params;
    }
    return {
      dealId: params.dealId,
    };
  }
};
