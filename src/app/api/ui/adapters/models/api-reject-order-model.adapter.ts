import { RejectOrderModelAlt } from '../../models/reject-order-model-alt.interface';
import { ApiRejectOrderModelAltDto } from '../../../swagger/models/api-reject-order-model';
import { apiApproveOrderModelAltDtoAdapter } from './api-approve-order-model.adapter';

export const apiRejectOrderModelAltDtoAdapter = (source?: RejectOrderModelAlt | null): ApiRejectOrderModelAltDto => {
  return {
    ...apiApproveOrderModelAltDtoAdapter(source as unknown as Parameters<typeof apiApproveOrderModelAltDtoAdapter>[0]),
    CancellationReason: source?.cancellationReason,
  };
}
