import { OffersGetOfferInfo$Params } from '../../../swagger/fn/offers/offers-get-offer-info';

export interface OffersGetOfferInfoParams {
  id: number;
}

export const offersGetOfferInfoParamsAdapter = {
  adapt(params?: OffersGetOfferInfoParams): OffersGetOfferInfo$Params {
    if (!params) {
      return {} as OffersGetOfferInfo$Params;
    }
    return {
      id: params.id,
    };
  }
};
