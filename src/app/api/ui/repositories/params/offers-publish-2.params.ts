import { MarketPublishParticipantOffer } from '../../models/market-publish-participant-offer.interface';
import { OffersPublish2$Params } from '../../../swagger/fn/offers/offers-publish-2';
import { apiMarketPublishParticipantOfferDtoAdapter } from '../../adapters/models/api-market-publish-participant-offer-dto.adapter';

// @ts-ignore
export interface OffersPublish2Params {
  body?: MarketPublishParticipantOffer;
}

export function offersPublish2Adapter(params?: OffersPublish2Params): OffersPublish2$Params {
  if (!params) {
    return {} as OffersPublish2$Params;
  }
  return {
      body: apiMarketPublishParticipantOfferDtoAdapter(params.body),
  };
}
