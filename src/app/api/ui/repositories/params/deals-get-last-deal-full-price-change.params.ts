import { DealsGetLastDealFullPriceChange$Params } from '../../../swagger/fn/deals/deals-get-last-deal-full-price-change';

// @ts-ignore
export interface DealsGetLastDealFullPriceChangeParams {
  dealId: number;
}

export function dealsGetLastDealFullPriceChangeAdapter(params?: DealsGetLastDealFullPriceChangeParams): DealsGetLastDealFullPriceChange$Params {
  if (!params) {
    return {} as DealsGetLastDealFullPriceChange$Params;
  }
  return {
      dealId: params.dealId,
  };
}
