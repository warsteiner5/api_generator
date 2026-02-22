import { DealSignDealOutsideEShop$Params } from '../../../swagger/fn/deal/deal-sign-deal-outside-e-shop';
import { FullDeal } from '../../models/full-deal.interface';
import { apiFullDealDtoAdapter } from '../../adapters/models/api-full-deal-dto.adapter';

// @ts-ignore
export interface DealSignDealOutsideEShopParams {
  body?: FullDeal;
}

export function dealSignDealOutsideEShopAdapter(params?: DealSignDealOutsideEShopParams): DealSignDealOutsideEShop$Params {
  if (!params) {
    return {} as DealSignDealOutsideEShop$Params;
  }
  return {
      body: apiFullDealDtoAdapter(params.body),
  };
}
