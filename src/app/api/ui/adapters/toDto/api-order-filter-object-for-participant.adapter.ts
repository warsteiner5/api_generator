import { OrderFilterObjectForParticipantAlt } from '../../models/order-filter-object-for-participant-alt.interface';
import { ApiOrderFilterObjectForParticipantAltDto } from '../../../swagger/models/api-order-filter-object-for-participant';

export function adaptApiOrderFilterObjectForParticipantAltDto(source?: OrderFilterObjectForParticipantAlt | null): ApiOrderFilterObjectForParticipantAltDto {
  return (source ?? {}) as ApiOrderFilterObjectForParticipantAltDto;
}
