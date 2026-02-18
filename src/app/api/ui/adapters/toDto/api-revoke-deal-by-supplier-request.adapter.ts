import { RevokeDealBySupplierRequestAlt } from '../../models/revoke-deal-by-supplier-request-alt.interface';
import { ApiRevokeDealBySupplierRequestAltDto } from '../../../swagger/models/api-revoke-deal-by-supplier-request';

export function adaptApiRevokeDealBySupplierRequestAltDto(source?: RevokeDealBySupplierRequestAlt | null): ApiRevokeDealBySupplierRequestAltDto {
  return {
    RejectReason: source?.rejectReason,
  };
}
