import { ApiRejectOrderBySupplierModelAltDto } from '../../../swagger/models/api-reject-order-by-supplier-model';
import { RejectOrderBySupplierModelAlt } from '../../models/reject-order-by-supplier-model-alt.interface';

export const rejectOrderBySupplierModelAltAdapter = (source?: ApiRejectOrderBySupplierModelAltDto | null): RejectOrderBySupplierModelAlt => {
  return (source ?? {}) as RejectOrderBySupplierModelAlt;
}
