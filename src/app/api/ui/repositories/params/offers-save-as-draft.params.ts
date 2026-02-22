import { MarketParticipantOffer } from '../../models/market-participant-offer.interface';
import { OffersSaveAsDraft$Params } from '../../../swagger/fn/offers/offers-save-as-draft';
import { apiMarketParticipantOfferDtoAdapter } from '../../adapters/models/api-market-participant-offer-dto.adapter';

// @ts-ignore
export interface OffersSaveAsDraftParams {
  body?: MarketParticipantOffer;
}

export function offersSaveAsDraftAdapter(params?: OffersSaveAsDraftParams): OffersSaveAsDraft$Params {
  if (!params) {
    return {} as OffersSaveAsDraft$Params;
  }
  return {
      body: apiMarketParticipantOfferDtoAdapter(params.body),
  };
}
