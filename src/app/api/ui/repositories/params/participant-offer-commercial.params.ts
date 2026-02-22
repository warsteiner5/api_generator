import { CommercialOfferFilter } from '../../models/commercial-offer-filter.interface';
import { ParticipantOfferCommercial$Params } from '../../../swagger/fn/participant-offer/participant-offer-commercial';
import { apiCommercialOfferFilterDtoAdapter } from '../../adapters/models/api-commercial-offer-filter-dto.adapter';

// @ts-ignore
export interface ParticipantOfferCommercialParams {
  body?: CommercialOfferFilter;
}

export function participantOfferCommercialAdapter(params?: ParticipantOfferCommercialParams): ParticipantOfferCommercial$Params {
  if (!params) {
    return {} as ParticipantOfferCommercial$Params;
  }
  return {
      body: apiCommercialOfferFilterDtoAdapter(params.body),
  };
}
