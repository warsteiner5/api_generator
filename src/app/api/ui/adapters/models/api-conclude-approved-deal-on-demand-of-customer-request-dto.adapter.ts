import { ConcludeApprovedDealOnDemandOfCustomerRequest } from '../../models/conclude-approved-deal-on-demand-of-customer-request.interface';
import { ApiConcludeApprovedDealOnDemandOfCustomerRequestDto } from '../../../swagger/models/api-conclude-approved-deal-on-demand-of-customer-request-dto';
import { apiSignatureForDealDtoAdapter } from './api-signature-for-deal-dto.adapter';

export const apiConcludeApprovedDealOnDemandOfCustomerRequestDtoAdapter = (source?: ConcludeApprovedDealOnDemandOfCustomerRequest | null): ApiConcludeApprovedDealOnDemandOfCustomerRequestDto => {
  return {
    OrganizationId: source?.organizationId,
    SignatureForDealDto: source?.signatureForDealDto === null ? undefined : apiSignatureForDealDtoAdapter(source?.signatureForDealDto),
    UserId: source?.userId,
  };
}
