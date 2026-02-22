import { DealSignDealOutsideEShopExternal$Params } from '../../../swagger/fn/deal/deal-sign-deal-outside-e-shop-external';
import { FullDeal } from '../../models/full-deal.interface';
import { apiFullDealDtoAdapter } from '../../adapters/models/api-full-deal-dto.adapter';

// @ts-ignore
export interface DealSignDealOutsideEShopExternalParams {
  body?: FullDeal;
}

export function dealSignDealOutsideEShopExternalAdapter(params?: DealSignDealOutsideEShopExternalParams): DealSignDealOutsideEShopExternal$Params {
  if (!params) {
    return {} as DealSignDealOutsideEShopExternal$Params;
  }
  return {
      body: apiFullDealDtoAdapter(params.body),
  };
}
