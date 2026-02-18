import { MarketParticipantOffer } from '../../models/market-participant-offer.interface';
import { OffersPublishExternal$Params } from '../../../swagger/fn/offers/offers-publish-external';
import { adaptApiMarketParticipantOfferDto } from '../../adapters/toDto/api-market-participant-offer-dto.adapter';

export interface OffersPublishExternalParams {
  body?: MarketParticipantOffer;
}

export const offersPublishExternalParamsAdapter = {
  adapt(params?: OffersPublishExternalParams): OffersPublishExternal$Params {
    if (!params) {
      return {} as OffersPublishExternal$Params;
    }
    return {
      body: adaptApiMarketParticipantOfferDto(params.body),
    };
  }
};
