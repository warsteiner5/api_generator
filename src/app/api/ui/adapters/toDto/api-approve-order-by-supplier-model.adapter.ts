import { ApproveOrderBySupplierModelAlt } from '../../models/approve-order-by-supplier-model-alt.interface';
import { ApiApproveOrderBySupplierModelAltDto } from '../../../swagger/models/api-approve-order-by-supplier-model';

export function adaptApiApproveOrderBySupplierModelAltDto(source?: ApproveOrderBySupplierModelAlt | null): ApiApproveOrderBySupplierModelAltDto {
  return (source ?? {}) as ApiApproveOrderBySupplierModelAltDto;
}
