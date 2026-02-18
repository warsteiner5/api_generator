import { ConcludeApprovedDealOnDemandOfCustomerRequest } from '../../models/conclude-approved-deal-on-demand-of-customer-request.interface';
import { ApiConcludeApprovedDealOnDemandOfCustomerRequestDto } from '../../../swagger/models/api-conclude-approved-deal-on-demand-of-customer-request-dto';
import { adaptApiSignatureForDealDto } from './api-signature-for-deal-dto.adapter';

export function adaptApiConcludeApprovedDealOnDemandOfCustomerRequestDto(source?: ConcludeApprovedDealOnDemandOfCustomerRequest | null): ApiConcludeApprovedDealOnDemandOfCustomerRequestDto {
  return {
    OrganizationId: source?.organizationId,
    SignatureForDealDto: adaptApiSignatureForDealDto(source?.signatureForDealDto),
    UserId: source?.userId,
  };
}
