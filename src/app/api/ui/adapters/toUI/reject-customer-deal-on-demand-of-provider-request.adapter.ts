import { ApiRejectCustomerDealOnDemandOfProviderRequestDto } from '../../../swagger/models/api-reject-customer-deal-on-demand-of-provider-request-dto';
import { RejectCustomerDealOnDemandOfProviderRequest } from '../../models/reject-customer-deal-on-demand-of-provider-request.interface';
import { adaptDifferenceDealProtocolAltToUI } from './difference-deal-protocol-alt.adapter';

export function adaptRejectCustomerDealOnDemandOfProviderRequestToUI(source?: ApiRejectCustomerDealOnDemandOfProviderRequestDto | null): RejectCustomerDealOnDemandOfProviderRequest {
  return {
    differenceDealProtocol: adaptDifferenceDealProtocolAltToUI(source?.DifferenceDealProtocol),
    organizationId: source?.OrganizationId ?? 0,
  };
}
