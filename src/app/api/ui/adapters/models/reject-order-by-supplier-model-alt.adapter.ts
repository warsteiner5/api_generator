import { ApiRejectOrderBySupplierModelAltDto } from '../../../swagger/models/api-reject-order-by-supplier-model';
import { RejectOrderBySupplierModelAlt } from '../../models/reject-order-by-supplier-model-alt.interface';
import { rejectOrderModelAltAdapter } from './reject-order-model-alt.adapter';

export const rejectOrderBySupplierModelAltAdapter = (source?: ApiRejectOrderBySupplierModelAltDto | null): RejectOrderBySupplierModelAlt => {
  return {
    ...rejectOrderModelAltAdapter(source as unknown as Parameters<typeof rejectOrderModelAltAdapter>[0]),
    supplierId: source?.SupplierId,
  };
}
