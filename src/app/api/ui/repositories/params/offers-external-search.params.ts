import { OffersExternalSearch$Params } from '../../../swagger/fn/offers/offers-external-search';
import { ParticipantOffersSearchFilterAlt } from '../../models/participant-offers-search-filter-alt.interface';
import { adaptApiParticipantOffersSearchFilterAltDto } from '../../adapters/toDto/api-participant-offers-search-filter.adapter';

export interface OffersExternalSearchParams {
  body?: ParticipantOffersSearchFilterAlt;
}

export const offersExternalSearchParamsAdapter = {
  adapt(params?: OffersExternalSearchParams): OffersExternalSearch$Params {
    if (!params) {
      return {} as OffersExternalSearch$Params;
    }
    return {
      body: adaptApiParticipantOffersSearchFilterAltDto(params.body),
    };
  }
};
