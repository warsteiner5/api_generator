import { MzPriceList } from '../../models/mz-price-list.interface';
import { PriceListsCreatePriceList$Params } from '../../../swagger/fn/price-lists/price-lists-create-price-list';
import { apiMzPriceListDtoAdapter } from '../../adapters/models/api-mz-price-list-dto.adapter';

// @ts-ignore
export interface PriceListsCreatePriceListParams {
  body?: MzPriceList;
}

export function priceListsCreatePriceListAdapter(params?: PriceListsCreatePriceListParams): PriceListsCreatePriceList$Params {
  if (!params) {
    return {} as PriceListsCreatePriceList$Params;
  }
  return {
      body: apiMzPriceListDtoAdapter(params.body),
  };
}
