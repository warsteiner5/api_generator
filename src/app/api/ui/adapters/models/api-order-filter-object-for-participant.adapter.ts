import { OrderFilterObjectForParticipantAlt } from '../../models/order-filter-object-for-participant-alt.interface';
import { ApiOrderFilterObjectForParticipantAltDto } from '../../../swagger/models/api-order-filter-object-for-participant';
import { apiOrderFilterObjectAltDtoAdapter } from './api-order-filter-object.adapter';

export const apiOrderFilterObjectForParticipantAltDtoAdapter = (source?: OrderFilterObjectForParticipantAlt | null): ApiOrderFilterObjectForParticipantAltDto => {
  return {
    ...apiOrderFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiOrderFilterObjectAltDtoAdapter>[0]),
    CustomerNameOrInn: source?.customerNameOrInn,
  };
}
