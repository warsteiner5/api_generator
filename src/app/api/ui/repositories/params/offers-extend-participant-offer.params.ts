import { OffersExtendParticipantOffer$Params } from '../../../swagger/fn/offers/offers-extend-participant-offer';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface OffersExtendParticipantOfferParams {
  body?: SearchObjectAlt;
}

export const offersExtendParticipantOfferParamsAdapter = {
  adapt(params?: OffersExtendParticipantOfferParams): OffersExtendParticipantOffer$Params {
    if (!params) {
      return {} as OffersExtendParticipantOffer$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
