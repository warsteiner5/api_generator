import { CommercialOfferFilter } from '../../models/commercial-offer-filter.interface';
import { ParticipantOfferCommercial$Params } from '../../../swagger/fn/participant-offer/participant-offer-commercial';
import { adaptApiCommercialOfferFilterDto } from '../../adapters/toDto/api-commercial-offer-filter-dto.adapter';

export interface ParticipantOfferCommercialParams {
  body?: CommercialOfferFilter;
}

export const participantOfferCommercialParamsAdapter = {
  adapt(params?: ParticipantOfferCommercialParams): ParticipantOfferCommercial$Params {
    if (!params) {
      return {} as ParticipantOfferCommercial$Params;
    }
    return {
      body: adaptApiCommercialOfferFilterDto(params.body),
    };
  }
};
