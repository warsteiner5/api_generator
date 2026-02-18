import { DealOutsideEShop } from '../../models/deal-outside-e-shop.interface';
import { DealsSignDealOutsideEShop$Params } from '../../../swagger/fn/deals/deals-sign-deal-outside-e-shop';
import { adaptApiDealOutsideEShopDto } from '../../adapters/toDto/api-deal-outside-e-shop-dto.adapter';

export interface DealsSignDealOutsideEShopParams {
  body?: DealOutsideEShop;
}

export const dealsSignDealOutsideEShopParamsAdapter = {
  adapt(params?: DealsSignDealOutsideEShopParams): DealsSignDealOutsideEShop$Params {
    if (!params) {
      return {} as DealsSignDealOutsideEShop$Params;
    }
    return {
      body: adaptApiDealOutsideEShopDto(params.body),
    };
  }
};
