import { ParticipantOffersSearchFilterAlt } from '../../models/participant-offers-search-filter-alt.interface';
import { ApiParticipantOffersSearchFilterAltDto } from '../../../swagger/models/api-participant-offers-search-filter';

export const apiParticipantOffersSearchFilterAltDtoAdapter = (source?: ParticipantOffersSearchFilterAlt | null): ApiParticipantOffersSearchFilterAltDto => {
  return {
    Ids: source?.ids,
  };
}
