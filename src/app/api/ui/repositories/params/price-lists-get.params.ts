import { PriceListsGet$Params } from '../../../swagger/fn/price-lists/price-lists-get';

export interface PriceListsGetParams {
  id: number;
}

export const priceListsGetParamsAdapter = {
  adapt(params?: PriceListsGetParams): PriceListsGet$Params {
    if (!params) {
      return {} as PriceListsGet$Params;
    }
    return {
      id: params.id,
    };
  }
};
