import { OffersValidateAccessToOffer$Params } from '../../../swagger/fn/offers/offers-validate-access-to-offer';

export interface OffersValidateAccessToOfferParams {
  id: number;
}

export const offersValidateAccessToOfferParamsAdapter = {
  adapt(params?: OffersValidateAccessToOfferParams): OffersValidateAccessToOffer$Params {
    if (!params) {
      return {} as OffersValidateAccessToOffer$Params;
    }
    return {
      id: params.id,
    };
  }
};
