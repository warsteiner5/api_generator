import { DealSignDealOutsideEShopExternal$Params } from '../../../swagger/fn/deal/deal-sign-deal-outside-e-shop-external';
import { FullDeal } from '../../models/full-deal.interface';
import { adaptApiFullDealDto } from '../../adapters/toDto/api-full-deal-dto.adapter';

export interface DealSignDealOutsideEShopExternalParams {
  body?: FullDeal;
}

export const dealSignDealOutsideEShopExternalParamsAdapter = {
  adapt(params?: DealSignDealOutsideEShopExternalParams): DealSignDealOutsideEShopExternal$Params {
    if (!params) {
      return {} as DealSignDealOutsideEShopExternal$Params;
    }
    return {
      body: adaptApiFullDealDto(params.body),
    };
  }
};
