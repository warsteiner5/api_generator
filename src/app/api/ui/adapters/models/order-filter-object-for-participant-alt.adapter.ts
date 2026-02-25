import { ApiOrderFilterObjectForParticipantAltDto } from '../../../swagger/models/api-order-filter-object-for-participant';
import { OrderFilterObjectForParticipantAlt } from '../../models/order-filter-object-for-participant-alt.interface';
import { orderFilterObjectAltAdapter } from './order-filter-object-alt.adapter';

export const orderFilterObjectForParticipantAltAdapter = (source?: ApiOrderFilterObjectForParticipantAltDto | null): OrderFilterObjectForParticipantAlt => {
  return {
    ...orderFilterObjectAltAdapter(source as unknown as Parameters<typeof orderFilterObjectAltAdapter>[0]),
    customerNameOrInn: source?.CustomerNameOrInn,
  };
}
