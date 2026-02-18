import { RevokeDealByCustomerRequestAlt } from '../../models/revoke-deal-by-customer-request-alt.interface';
import { ApiRevokeDealByCustomerRequestAltDto } from '../../../swagger/models/api-revoke-deal-by-customer-request';

export function adaptApiRevokeDealByCustomerRequestAltDto(source?: RevokeDealByCustomerRequestAlt | null): ApiRevokeDealByCustomerRequestAltDto {
  return {
    RejectReason: source?.rejectReason,
  };
}
