import { ApiRevokeDealBySupplierRequestAltDto } from '../../../swagger/models/api-revoke-deal-by-supplier-request';
import { RevokeDealBySupplierRequestAlt } from '../../models/revoke-deal-by-supplier-request-alt.interface';

export const revokeDealBySupplierRequestAltAdapter = (source?: ApiRevokeDealBySupplierRequestAltDto | null): RevokeDealBySupplierRequestAlt => {
  return {
    rejectReason: source?.RejectReason,
  };
}
