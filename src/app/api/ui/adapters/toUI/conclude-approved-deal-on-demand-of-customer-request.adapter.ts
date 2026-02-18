import { ApiConcludeApprovedDealOnDemandOfCustomerRequestDto } from '../../../swagger/models/api-conclude-approved-deal-on-demand-of-customer-request-dto';
import { ConcludeApprovedDealOnDemandOfCustomerRequest } from '../../models/conclude-approved-deal-on-demand-of-customer-request.interface';
import { adaptSignatureForDealToUI } from './signature-for-deal.adapter';

export function adaptConcludeApprovedDealOnDemandOfCustomerRequestToUI(source?: ApiConcludeApprovedDealOnDemandOfCustomerRequestDto | null): ConcludeApprovedDealOnDemandOfCustomerRequest {
  return {
    organizationId: source?.OrganizationId ?? 0,
    signatureForDealDto: adaptSignatureForDealToUI(source?.SignatureForDealDto),
    userId: source?.UserId ?? 0,
  };
}
