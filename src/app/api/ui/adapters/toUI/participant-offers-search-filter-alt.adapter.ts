import { ApiParticipantOffersSearchFilterAltDto } from '../../../swagger/models/api-participant-offers-search-filter';
import { ParticipantOffersSearchFilterAlt } from '../../models/participant-offers-search-filter-alt.interface';

export function adaptParticipantOffersSearchFilterAltToUI(source?: ApiParticipantOffersSearchFilterAltDto | null): ParticipantOffersSearchFilterAlt {
  return {
    ids: source?.Ids ?? [],
  };
}
