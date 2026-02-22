import { ApiApproveOrderBySupplierModelAltDto } from '../../../swagger/models/api-approve-order-by-supplier-model';
import { ApproveOrderBySupplierModelAlt } from '../../models/approve-order-by-supplier-model-alt.interface';

export const approveOrderBySupplierModelAltAdapter = (source?: ApiApproveOrderBySupplierModelAltDto | null): ApproveOrderBySupplierModelAlt => {
  return (source ?? {}) as ApproveOrderBySupplierModelAlt;
}
