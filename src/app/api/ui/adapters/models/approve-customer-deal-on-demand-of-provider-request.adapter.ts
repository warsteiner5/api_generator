import { ApiApproveCustomerDealOnDemandOfProviderRequestDto } from '../../../swagger/models/api-approve-customer-deal-on-demand-of-provider-request-dto';
import { ApproveCustomerDealOnDemandOfProviderRequest } from '../../models/approve-customer-deal-on-demand-of-provider-request.interface';
import { signatureForDealAdapter } from './signature-for-deal.adapter';

export const approveCustomerDealOnDemandOfProviderRequestAdapter = (source?: ApiApproveCustomerDealOnDemandOfProviderRequestDto | null): ApproveCustomerDealOnDemandOfProviderRequest => {
  return {
    organizationId: source?.OrganizationId,
    signatureForDealDto: source?.SignatureForDealDto === null ? undefined : signatureForDealAdapter(source?.SignatureForDealDto),
  };
}
