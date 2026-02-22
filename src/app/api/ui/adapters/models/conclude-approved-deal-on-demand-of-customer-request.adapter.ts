import { ApiConcludeApprovedDealOnDemandOfCustomerRequestDto } from '../../../swagger/models/api-conclude-approved-deal-on-demand-of-customer-request-dto';
import { ConcludeApprovedDealOnDemandOfCustomerRequest } from '../../models/conclude-approved-deal-on-demand-of-customer-request.interface';
import { signatureForDealAdapter } from './signature-for-deal.adapter';

export const concludeApprovedDealOnDemandOfCustomerRequestAdapter = (source?: ApiConcludeApprovedDealOnDemandOfCustomerRequestDto | null): ConcludeApprovedDealOnDemandOfCustomerRequest => {
  return {
    organizationId: source?.OrganizationId,
    signatureForDealDto: source?.SignatureForDealDto === null ? undefined : signatureForDealAdapter(source?.SignatureForDealDto),
    userId: source?.UserId,
  };
}
