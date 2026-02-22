import { MarketParticipantOffer } from '../../models/market-participant-offer.interface';
import { OffersPublish$Params } from '../../../swagger/fn/offers/offers-publish';
import { apiMarketParticipantOfferDtoAdapter } from '../../adapters/models/api-market-participant-offer-dto.adapter';

// @ts-ignore
export interface OffersPublishParams {
  body?: MarketParticipantOffer;
}

export function offersPublishAdapter(params?: OffersPublishParams): OffersPublish$Params {
  if (!params) {
    return {} as OffersPublish$Params;
  }
  return {
      body: apiMarketParticipantOfferDtoAdapter(params.body),
  };
}
