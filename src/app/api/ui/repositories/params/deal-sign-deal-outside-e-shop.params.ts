import { DealSignDealOutsideEShop$Params } from '../../../swagger/fn/deal/deal-sign-deal-outside-e-shop';
import { FullDeal } from '../../models/full-deal.interface';
import { adaptApiFullDealDto } from '../../adapters/toDto/api-full-deal-dto.adapter';

export interface DealSignDealOutsideEShopParams {
  body?: FullDeal;
}

export const dealSignDealOutsideEShopParamsAdapter = {
  adapt(params?: DealSignDealOutsideEShopParams): DealSignDealOutsideEShop$Params {
    if (!params) {
      return {} as DealSignDealOutsideEShop$Params;
    }
    return {
      body: adaptApiFullDealDto(params.body),
    };
  }
};
