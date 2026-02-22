import { EditMzPriceList } from '../../models/edit-mz-price-list.interface';
import { PriceListsEditPriceList$Params } from '../../../swagger/fn/price-lists/price-lists-edit-price-list';
import { apiEditMzPriceListDtoAdapter } from '../../adapters/models/api-edit-mz-price-list-dto.adapter';

// @ts-ignore
export interface PriceListsEditPriceListParams {
  body?: EditMzPriceList;
}

export function priceListsEditPriceListAdapter(params?: PriceListsEditPriceListParams): PriceListsEditPriceList$Params {
  if (!params) {
    return {} as PriceListsEditPriceList$Params;
  }
  return {
      body: apiEditMzPriceListDtoAdapter(params.body),
  };
}
