import { ApiTradesFilterObjectForParticipantAltDto } from '../../../swagger/models/api-trades-filter-object-for-participant';
import { TradesFilterObjectForParticipantAlt } from '../../models/trades-filter-object-for-participant-alt.interface';

export const tradesFilterObjectForParticipantAltAdapter = (source?: ApiTradesFilterObjectForParticipantAltDto | null): TradesFilterObjectForParticipantAlt => {
  return (source ?? {}) as TradesFilterObjectForParticipantAlt;
}
