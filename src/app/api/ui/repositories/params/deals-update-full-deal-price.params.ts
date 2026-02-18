import { DealFullPriceChange } from '../../models/deal-full-price-change.interface';
import { DealsUpdateFullDealPrice$Params } from '../../../swagger/fn/deals/deals-update-full-deal-price';
import { adaptApiDealFullPriceChangeDto } from '../../adapters/toDto/api-deal-full-price-change-dto.adapter';

export interface DealsUpdateFullDealPriceParams {
  body?: DealFullPriceChange;
}

export const dealsUpdateFullDealPriceParamsAdapter = {
  adapt(params?: DealsUpdateFullDealPriceParams): DealsUpdateFullDealPrice$Params {
    if (!params) {
      return {} as DealsUpdateFullDealPrice$Params;
    }
    return {
      body: adaptApiDealFullPriceChangeDto(params.body),
    };
  }
};
