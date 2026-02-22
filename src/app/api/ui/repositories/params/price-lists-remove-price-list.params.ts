import { PriceListsRemovePriceList$Params } from '../../../swagger/fn/price-lists/price-lists-remove-price-list';

// @ts-ignore
export interface PriceListsRemovePriceListParams {
  id: number;
}

export function priceListsRemovePriceListAdapter(params?: PriceListsRemovePriceListParams): PriceListsRemovePriceList$Params {
  if (!params) {
    return {} as PriceListsRemovePriceList$Params;
  }
  return {
      id: params.id,
  };
}
