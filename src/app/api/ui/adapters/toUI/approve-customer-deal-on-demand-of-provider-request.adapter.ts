import { ApiApproveCustomerDealOnDemandOfProviderRequestDto } from '../../../swagger/models/api-approve-customer-deal-on-demand-of-provider-request-dto';
import { ApproveCustomerDealOnDemandOfProviderRequest } from '../../models/approve-customer-deal-on-demand-of-provider-request.interface';
import { adaptSignatureForDealToUI } from './signature-for-deal.adapter';

export function adaptApproveCustomerDealOnDemandOfProviderRequestToUI(source?: ApiApproveCustomerDealOnDemandOfProviderRequestDto | null): ApproveCustomerDealOnDemandOfProviderRequest {
  return {
    organizationId: source?.OrganizationId ?? 0,
    signatureForDealDto: adaptSignatureForDealToUI(source?.SignatureForDealDto),
  };
}
