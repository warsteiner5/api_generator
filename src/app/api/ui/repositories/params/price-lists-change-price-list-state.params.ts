import { PriceListsChangePriceListState$Params } from '../../../swagger/fn/price-lists/price-lists-change-price-list-state';

// @ts-ignore
export interface PriceListsChangePriceListStateParams {
  id: number;
  state: number;
}

export function priceListsChangePriceListStateAdapter(params?: PriceListsChangePriceListStateParams): PriceListsChangePriceListState$Params {
  if (!params) {
    return {} as PriceListsChangePriceListState$Params;
  }
  return {
      id: params.id,
      state: params.state,
  };
}
