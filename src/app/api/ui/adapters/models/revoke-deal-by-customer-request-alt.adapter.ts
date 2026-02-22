import { ApiRevokeDealByCustomerRequestAltDto } from '../../../swagger/models/api-revoke-deal-by-customer-request';
import { RevokeDealByCustomerRequestAlt } from '../../models/revoke-deal-by-customer-request-alt.interface';

export const revokeDealByCustomerRequestAltAdapter = (source?: ApiRevokeDealByCustomerRequestAltDto | null): RevokeDealByCustomerRequestAlt => {
  return {
    rejectReason: source?.RejectReason,
  };
}
