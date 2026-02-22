import { ApiRejectCustomerDealOnDemandOfProviderRequestDto } from '../../../swagger/models/api-reject-customer-deal-on-demand-of-provider-request-dto';
import { RejectCustomerDealOnDemandOfProviderRequest } from '../../models/reject-customer-deal-on-demand-of-provider-request.interface';
import { differenceDealProtocolAltAdapter } from './difference-deal-protocol-alt.adapter';

export const rejectCustomerDealOnDemandOfProviderRequestAdapter = (source?: ApiRejectCustomerDealOnDemandOfProviderRequestDto | null): RejectCustomerDealOnDemandOfProviderRequest => {
  return {
    differenceDealProtocol: source?.DifferenceDealProtocol === null ? undefined : differenceDealProtocolAltAdapter(source?.DifferenceDealProtocol),
    organizationId: source?.OrganizationId,
  };
}
