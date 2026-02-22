import { PriceListsGet$Params } from '../../../swagger/fn/price-lists/price-lists-get';

// @ts-ignore
export interface PriceListsGetParams {
  id: number;
}

export function priceListsGetAdapter(params?: PriceListsGetParams): PriceListsGet$Params {
  if (!params) {
    return {} as PriceListsGet$Params;
  }
  return {
      id: params.id,
  };
}
