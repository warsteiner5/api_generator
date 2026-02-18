import { EditMzPriceList } from '../../models/edit-mz-price-list.interface';
import { PriceListsEditPriceList$Params } from '../../../swagger/fn/price-lists/price-lists-edit-price-list';
import { adaptApiEditMzPriceListDto } from '../../adapters/toDto/api-edit-mz-price-list-dto.adapter';

export interface PriceListsEditPriceListParams {
  body?: EditMzPriceList;
}

export const priceListsEditPriceListParamsAdapter = {
  adapt(params?: PriceListsEditPriceListParams): PriceListsEditPriceList$Params {
    if (!params) {
      return {} as PriceListsEditPriceList$Params;
    }
    return {
      body: adaptApiEditMzPriceListDto(params.body),
    };
  }
};
