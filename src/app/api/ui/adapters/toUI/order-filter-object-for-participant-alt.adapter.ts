import { ApiOrderFilterObjectForParticipantAltDto } from '../../../swagger/models/api-order-filter-object-for-participant';
import { OrderFilterObjectForParticipantAlt } from '../../models/order-filter-object-for-participant-alt.interface';

export function adaptOrderFilterObjectForParticipantAltToUI(source?: ApiOrderFilterObjectForParticipantAltDto | null): OrderFilterObjectForParticipantAlt {
  return (source ?? {}) as OrderFilterObjectForParticipantAlt;
}
