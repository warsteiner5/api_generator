import { MarketParticipantOffer } from '../../models/market-participant-offer.interface';
import { OffersPublish$Params } from '../../../swagger/fn/offers/offers-publish';
import { adaptApiMarketParticipantOfferDto } from '../../adapters/toDto/api-market-participant-offer-dto.adapter';

export interface OffersPublishParams {
  body?: MarketParticipantOffer;
}

export const offersPublishParamsAdapter = {
  adapt(params?: OffersPublishParams): OffersPublish$Params {
    if (!params) {
      return {} as OffersPublish$Params;
    }
    return {
      body: adaptApiMarketParticipantOfferDto(params.body),
    };
  }
};
