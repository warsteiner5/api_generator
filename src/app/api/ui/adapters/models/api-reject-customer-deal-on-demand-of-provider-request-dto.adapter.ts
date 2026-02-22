import { RejectCustomerDealOnDemandOfProviderRequest } from '../../models/reject-customer-deal-on-demand-of-provider-request.interface';
import { ApiRejectCustomerDealOnDemandOfProviderRequestDto } from '../../../swagger/models/api-reject-customer-deal-on-demand-of-provider-request-dto';
import { apiDifferenceDealProtocolAltDtoAdapter } from './api-difference-deal-protocol.adapter';

export const apiRejectCustomerDealOnDemandOfProviderRequestDtoAdapter = (source?: RejectCustomerDealOnDemandOfProviderRequest | null): ApiRejectCustomerDealOnDemandOfProviderRequestDto => {
  return {
    DifferenceDealProtocol: source?.differenceDealProtocol === null ? undefined : apiDifferenceDealProtocolAltDtoAdapter(source?.differenceDealProtocol),
    OrganizationId: source?.organizationId,
  };
}
