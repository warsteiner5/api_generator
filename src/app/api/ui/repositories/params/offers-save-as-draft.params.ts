import { MarketParticipantOffer } from '../../models/market-participant-offer.interface';
import { OffersSaveAsDraft$Params } from '../../../swagger/fn/offers/offers-save-as-draft';
import { adaptApiMarketParticipantOfferDto } from '../../adapters/toDto/api-market-participant-offer-dto.adapter';

export interface OffersSaveAsDraftParams {
  body?: MarketParticipantOffer;
}

export const offersSaveAsDraftParamsAdapter = {
  adapt(params?: OffersSaveAsDraftParams): OffersSaveAsDraft$Params {
    if (!params) {
      return {} as OffersSaveAsDraft$Params;
    }
    return {
      body: adaptApiMarketParticipantOfferDto(params.body),
    };
  }
};
