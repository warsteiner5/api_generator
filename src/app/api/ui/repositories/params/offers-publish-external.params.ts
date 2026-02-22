import { MarketParticipantOffer } from '../../models/market-participant-offer.interface';
import { OffersPublishExternal$Params } from '../../../swagger/fn/offers/offers-publish-external';
import { apiMarketParticipantOfferDtoAdapter } from '../../adapters/models/api-market-participant-offer-dto.adapter';

// @ts-ignore
export interface OffersPublishExternalParams {
  body?: MarketParticipantOffer;
}

export function offersPublishExternalAdapter(params?: OffersPublishExternalParams): OffersPublishExternal$Params {
  if (!params) {
    return {} as OffersPublishExternal$Params;
  }
  return {
      body: apiMarketParticipantOfferDtoAdapter(params.body),
  };
}
