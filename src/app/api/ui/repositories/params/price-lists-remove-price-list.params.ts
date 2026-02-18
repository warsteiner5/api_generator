import { PriceListsRemovePriceList$Params } from '../../../swagger/fn/price-lists/price-lists-remove-price-list';

export interface PriceListsRemovePriceListParams {
  id: number;
}

export const priceListsRemovePriceListParamsAdapter = {
  adapt(params?: PriceListsRemovePriceListParams): PriceListsRemovePriceList$Params {
    if (!params) {
      return {} as PriceListsRemovePriceList$Params;
    }
    return {
      id: params.id,
    };
  }
};
