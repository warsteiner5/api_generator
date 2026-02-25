import { ApiApproveOrderBySupplierModelAltDto } from '../../../swagger/models/api-approve-order-by-supplier-model';
import { ApproveOrderBySupplierModelAlt } from '../../models/approve-order-by-supplier-model-alt.interface';
import { approveOrderModelAltAdapter } from './approve-order-model-alt.adapter';

export const approveOrderBySupplierModelAltAdapter = (source?: ApiApproveOrderBySupplierModelAltDto | null): ApproveOrderBySupplierModelAlt => {
  return {
    ...approveOrderModelAltAdapter(source as unknown as Parameters<typeof approveOrderModelAltAdapter>[0]),
    organizationId: source?.OrganizationId,
  };
}
