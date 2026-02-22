import { OffersExtendParticipantOffer$Params } from '../../../swagger/fn/offers/offers-extend-participant-offer';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface OffersExtendParticipantOfferParams {
  body?: SearchObjectAlt;
}

export function offersExtendParticipantOfferAdapter(params?: OffersExtendParticipantOfferParams): OffersExtendParticipantOffer$Params {
  if (!params) {
    return {} as OffersExtendParticipantOffer$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
