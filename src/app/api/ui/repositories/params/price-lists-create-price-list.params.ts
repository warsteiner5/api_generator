import { MzPriceList } from '../../models/mz-price-list.interface';
import { PriceListsCreatePriceList$Params } from '../../../swagger/fn/price-lists/price-lists-create-price-list';
import { adaptApiMzPriceListDto } from '../../adapters/toDto/api-mz-price-list-dto.adapter';

export interface PriceListsCreatePriceListParams {
  body?: MzPriceList;
}

export const priceListsCreatePriceListParamsAdapter = {
  adapt(params?: PriceListsCreatePriceListParams): PriceListsCreatePriceList$Params {
    if (!params) {
      return {} as PriceListsCreatePriceList$Params;
    }
    return {
      body: adaptApiMzPriceListDto(params.body),
    };
  }
};
