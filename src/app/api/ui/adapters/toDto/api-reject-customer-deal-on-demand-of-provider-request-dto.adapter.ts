import { RejectCustomerDealOnDemandOfProviderRequest } from '../../models/reject-customer-deal-on-demand-of-provider-request.interface';
import { ApiRejectCustomerDealOnDemandOfProviderRequestDto } from '../../../swagger/models/api-reject-customer-deal-on-demand-of-provider-request-dto';
import { adaptApiDifferenceDealProtocolAltDto } from './api-difference-deal-protocol.adapter';

export function adaptApiRejectCustomerDealOnDemandOfProviderRequestDto(source?: RejectCustomerDealOnDemandOfProviderRequest | null): ApiRejectCustomerDealOnDemandOfProviderRequestDto {
  return {
    DifferenceDealProtocol: adaptApiDifferenceDealProtocolAltDto(source?.differenceDealProtocol),
    OrganizationId: source?.organizationId,
  };
}
