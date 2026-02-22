import { OffersExternalSearch$Params } from '../../../swagger/fn/offers/offers-external-search';
import { ParticipantOffersSearchFilterAlt } from '../../models/participant-offers-search-filter-alt.interface';
import { apiParticipantOffersSearchFilterAltDtoAdapter } from '../../adapters/models/api-participant-offers-search-filter.adapter';

// @ts-ignore
export interface OffersExternalSearchParams {
  body?: ParticipantOffersSearchFilterAlt;
}

export function offersExternalSearchAdapter(params?: OffersExternalSearchParams): OffersExternalSearch$Params {
  if (!params) {
    return {} as OffersExternalSearch$Params;
  }
  return {
      body: apiParticipantOffersSearchFilterAltDtoAdapter(params.body),
  };
}
