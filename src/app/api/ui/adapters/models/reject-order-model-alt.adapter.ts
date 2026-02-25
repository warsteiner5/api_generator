import { ApiRejectOrderModelAltDto } from '../../../swagger/models/api-reject-order-model';
import { RejectOrderModelAlt } from '../../models/reject-order-model-alt.interface';
import { approveOrderModelAltAdapter } from './approve-order-model-alt.adapter';

export const rejectOrderModelAltAdapter = (source?: ApiRejectOrderModelAltDto | null): RejectOrderModelAlt => {
  return {
    ...approveOrderModelAltAdapter(source as unknown as Parameters<typeof approveOrderModelAltAdapter>[0]),
    cancellationReason: source?.CancellationReason,
  };
}
