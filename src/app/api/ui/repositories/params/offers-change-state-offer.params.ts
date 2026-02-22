import { ChangeStateOffersModelAlt } from '../../models/change-state-offers-model-alt.interface';
import { OffersChangeStateOffer$Params } from '../../../swagger/fn/offers/offers-change-state-offer';
import { apiChangeStateOffersModelAltDtoAdapter } from '../../adapters/models/api-change-state-offers-model.adapter';

// @ts-ignore
export interface OffersChangeStateOfferParams {
  body?: ChangeStateOffersModelAlt;
}

export function offersChangeStateOfferAdapter(params?: OffersChangeStateOfferParams): OffersChangeStateOffer$Params {
  if (!params) {
    return {} as OffersChangeStateOffer$Params;
  }
  return {
      body: apiChangeStateOffersModelAltDtoAdapter(params.body),
  };
}
