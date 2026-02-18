import { PriceListsChangePriceListState$Params } from '../../../swagger/fn/price-lists/price-lists-change-price-list-state';

export interface PriceListsChangePriceListStateParams {
  id: number;
  state: number;
}

export const priceListsChangePriceListStateParamsAdapter = {
  adapt(params?: PriceListsChangePriceListStateParams): PriceListsChangePriceListState$Params {
    if (!params) {
      return {} as PriceListsChangePriceListState$Params;
    }
    return {
      id: params.id,
      state: params.state,
    };
  }
};
