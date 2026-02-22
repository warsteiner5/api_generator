import { RevokeDealBySupplierRequestAlt } from '../../models/revoke-deal-by-supplier-request-alt.interface';
import { ApiRevokeDealBySupplierRequestAltDto } from '../../../swagger/models/api-revoke-deal-by-supplier-request';

export const apiRevokeDealBySupplierRequestAltDtoAdapter = (source?: RevokeDealBySupplierRequestAlt | null): ApiRevokeDealBySupplierRequestAltDto => {
  return {
    RejectReason: source?.rejectReason,
  };
}
