import { OffersRemoveOffer$Params } from '../../../swagger/fn/offers/offers-remove-offer';

export interface OffersRemoveOfferParams {
  id: number;
}

export const offersRemoveOfferParamsAdapter = {
  adapt(params?: OffersRemoveOfferParams): OffersRemoveOffer$Params {
    if (!params) {
      return {} as OffersRemoveOffer$Params;
    }
    return {
      id: params.id,
    };
  }
};
