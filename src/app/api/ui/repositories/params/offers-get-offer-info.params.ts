import { OffersGetOfferInfo$Params } from '../../../swagger/fn/offers/offers-get-offer-info';

// @ts-ignore
export interface OffersGetOfferInfoParams {
  id: number;
}

export function offersGetOfferInfoAdapter(params?: OffersGetOfferInfoParams): OffersGetOfferInfo$Params {
  if (!params) {
    return {} as OffersGetOfferInfo$Params;
  }
  return {
      id: params.id,
  };
}
