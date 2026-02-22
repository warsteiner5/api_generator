import { OffersValidateAccessToOffer$Params } from '../../../swagger/fn/offers/offers-validate-access-to-offer';

// @ts-ignore
export interface OffersValidateAccessToOfferParams {
  id: number;
}

export function offersValidateAccessToOfferAdapter(params?: OffersValidateAccessToOfferParams): OffersValidateAccessToOffer$Params {
  if (!params) {
    return {} as OffersValidateAccessToOffer$Params;
  }
  return {
      id: params.id,
  };
}
