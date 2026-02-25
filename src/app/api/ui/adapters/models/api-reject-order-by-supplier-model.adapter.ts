import { RejectOrderBySupplierModelAlt } from '../../models/reject-order-by-supplier-model-alt.interface';
import { ApiRejectOrderBySupplierModelAltDto } from '../../../swagger/models/api-reject-order-by-supplier-model';
import { apiRejectOrderModelAltDtoAdapter } from './api-reject-order-model.adapter';

export const apiRejectOrderBySupplierModelAltDtoAdapter = (source?: RejectOrderBySupplierModelAlt | null): ApiRejectOrderBySupplierModelAltDto => {
  return {
    ...apiRejectOrderModelAltDtoAdapter(source as unknown as Parameters<typeof apiRejectOrderModelAltDtoAdapter>[0]),
    SupplierId: source?.supplierId,
  };
}
