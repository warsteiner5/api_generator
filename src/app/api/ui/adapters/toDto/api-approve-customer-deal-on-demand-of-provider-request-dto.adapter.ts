import { ApproveCustomerDealOnDemandOfProviderRequest } from '../../models/approve-customer-deal-on-demand-of-provider-request.interface';
import { ApiApproveCustomerDealOnDemandOfProviderRequestDto } from '../../../swagger/models/api-approve-customer-deal-on-demand-of-provider-request-dto';
import { adaptApiSignatureForDealDto } from './api-signature-for-deal-dto.adapter';

export function adaptApiApproveCustomerDealOnDemandOfProviderRequestDto(source?: ApproveCustomerDealOnDemandOfProviderRequest | null): ApiApproveCustomerDealOnDemandOfProviderRequestDto {
  return {
    OrganizationId: source?.organizationId,
    SignatureForDealDto: adaptApiSignatureForDealDto(source?.signatureForDealDto),
  };
}
