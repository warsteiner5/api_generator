import { TradesFilterObjectForParticipantAlt } from '../../models/trades-filter-object-for-participant-alt.interface';
import { ApiTradesFilterObjectForParticipantAltDto } from '../../../swagger/models/api-trades-filter-object-for-participant';

export const apiTradesFilterObjectForParticipantAltDtoAdapter = (source?: TradesFilterObjectForParticipantAlt | null): ApiTradesFilterObjectForParticipantAltDto => {
  return (source ?? {}) as ApiTradesFilterObjectForParticipantAltDto;
}
