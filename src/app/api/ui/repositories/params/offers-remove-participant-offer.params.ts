import { OffersRemoveParticipantOffer$Params } from '../../../swagger/fn/offers/offers-remove-participant-offer';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface OffersRemoveParticipantOfferParams {
  body?: SearchObjectAlt;
}

export const offersRemoveParticipantOfferParamsAdapter = {
  adapt(params?: OffersRemoveParticipantOfferParams): OffersRemoveParticipantOffer$Params {
    if (!params) {
      return {} as OffersRemoveParticipantOffer$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
