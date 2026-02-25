import { ApproveOrderBySupplierModelAlt } from '../../models/approve-order-by-supplier-model-alt.interface';
import { ApiApproveOrderBySupplierModelAltDto } from '../../../swagger/models/api-approve-order-by-supplier-model';
import { apiApproveOrderModelAltDtoAdapter } from './api-approve-order-model.adapter';

export const apiApproveOrderBySupplierModelAltDtoAdapter = (source?: ApproveOrderBySupplierModelAlt | null): ApiApproveOrderBySupplierModelAltDto => {
  return {
    ...apiApproveOrderModelAltDtoAdapter(source as unknown as Parameters<typeof apiApproveOrderModelAltDtoAdapter>[0]),
    OrganizationId: source?.organizationId,
  };
}
