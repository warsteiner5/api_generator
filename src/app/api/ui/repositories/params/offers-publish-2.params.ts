import { MarketPublishParticipantOffer } from '../../models/market-publish-participant-offer.interface';
import { OffersPublish2$Params } from '../../../swagger/fn/offers/offers-publish-2';
import { adaptApiMarketPublishParticipantOfferDto } from '../../adapters/toDto/api-market-publish-participant-offer-dto.adapter';

export interface OffersPublish2Params {
  body?: MarketPublishParticipantOffer;
}

export const offersPublish2ParamsAdapter = {
  adapt(params?: OffersPublish2Params): OffersPublish2$Params {
    if (!params) {
      return {} as OffersPublish2$Params;
    }
    return {
      body: adaptApiMarketPublishParticipantOfferDto(params.body),
    };
  }
};
