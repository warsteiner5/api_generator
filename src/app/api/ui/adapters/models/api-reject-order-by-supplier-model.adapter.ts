import { RejectOrderBySupplierModelAlt } from '../../models/reject-order-by-supplier-model-alt.interface';
import { ApiRejectOrderBySupplierModelAltDto } from '../../../swagger/models/api-reject-order-by-supplier-model';

export const apiRejectOrderBySupplierModelAltDtoAdapter = (source?: RejectOrderBySupplierModelAlt | null): ApiRejectOrderBySupplierModelAltDto => {
  return (source ?? {}) as ApiRejectOrderBySupplierModelAltDto;
}
