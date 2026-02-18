import { ApiRejectOrderModelAltDto } from '../../../swagger/models/api-reject-order-model';
import { RejectOrderModelAlt } from '../../models/reject-order-model-alt.interface';

export function adaptRejectOrderModelAltToUI(source?: ApiRejectOrderModelAltDto | null): RejectOrderModelAlt {
  return (source ?? {}) as RejectOrderModelAlt;
}
