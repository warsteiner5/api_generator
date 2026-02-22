import { DealFullPriceChange } from '../../models/deal-full-price-change.interface';
import { DealsUpdateFullDealPrice$Params } from '../../../swagger/fn/deals/deals-update-full-deal-price';
import { apiDealFullPriceChangeDtoAdapter } from '../../adapters/models/api-deal-full-price-change-dto.adapter';

// @ts-ignore
export interface DealsUpdateFullDealPriceParams {
  body?: DealFullPriceChange;
}

export function dealsUpdateFullDealPriceAdapter(params?: DealsUpdateFullDealPriceParams): DealsUpdateFullDealPrice$Params {
  if (!params) {
    return {} as DealsUpdateFullDealPrice$Params;
  }
  return {
      body: apiDealFullPriceChangeDtoAdapter(params.body),
  };
}
