import { OffersRemoveOffer$Params } from '../../../swagger/fn/offers/offers-remove-offer';

// @ts-ignore
export interface OffersRemoveOfferParams {
  id: number;
}

export function offersRemoveOfferAdapter(params?: OffersRemoveOfferParams): OffersRemoveOffer$Params {
  if (!params) {
    return {} as OffersRemoveOffer$Params;
  }
  return {
      id: params.id,
  };
}
