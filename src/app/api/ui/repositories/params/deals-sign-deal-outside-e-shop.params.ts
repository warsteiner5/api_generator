import { DealOutsideEShop } from '../../models/deal-outside-e-shop.interface';
import { DealsSignDealOutsideEShop$Params } from '../../../swagger/fn/deals/deals-sign-deal-outside-e-shop';
import { apiDealOutsideEShopDtoAdapter } from '../../adapters/models/api-deal-outside-e-shop-dto.adapter';

// @ts-ignore
export interface DealsSignDealOutsideEShopParams {
  body?: DealOutsideEShop;
}

export function dealsSignDealOutsideEShopAdapter(params?: DealsSignDealOutsideEShopParams): DealsSignDealOutsideEShop$Params {
  if (!params) {
    return {} as DealsSignDealOutsideEShop$Params;
  }
  return {
      body: apiDealOutsideEShopDtoAdapter(params.body),
  };
}
