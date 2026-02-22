import { DealRejectCustomerDealOnDemandOfProvider$Params } from '../../../swagger/fn/deal/deal-reject-customer-deal-on-demand-of-provider';
import { RejectCustomerDealOnDemandOfProviderRequest } from '../../models/reject-customer-deal-on-demand-of-provider-request.interface';
import { apiRejectCustomerDealOnDemandOfProviderRequestDtoAdapter } from '../../adapters/models/api-reject-customer-deal-on-demand-of-provider-request-dto.adapter';

// @ts-ignore
export interface DealRejectCustomerDealOnDemandOfProviderParams {
  body?: RejectCustomerDealOnDemandOfProviderRequest;
}

export function dealRejectCustomerDealOnDemandOfProviderAdapter(params?: DealRejectCustomerDealOnDemandOfProviderParams): DealRejectCustomerDealOnDemandOfProvider$Params {
  if (!params) {
    return {} as DealRejectCustomerDealOnDemandOfProvider$Params;
  }
  return {
      body: apiRejectCustomerDealOnDemandOfProviderRequestDtoAdapter(params.body),
  };
}
