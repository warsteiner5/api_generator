import { RejectOrderBySupplierModelAlt } from '../../models/reject-order-by-supplier-model-alt.interface';
import { ApiRejectOrderBySupplierModelAltDto } from '../../../swagger/models/api-reject-order-by-supplier-model';

export function adaptApiRejectOrderBySupplierModelAltDto(source?: RejectOrderBySupplierModelAlt | null): ApiRejectOrderBySupplierModelAltDto {
  return (source ?? {}) as ApiRejectOrderBySupplierModelAltDto;
}
