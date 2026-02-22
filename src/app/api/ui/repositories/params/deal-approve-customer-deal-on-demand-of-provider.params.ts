import { ApproveCustomerDealOnDemandOfProviderRequest } from '../../models/approve-customer-deal-on-demand-of-provider-request.interface';
import { DealApproveCustomerDealOnDemandOfProvider$Params } from '../../../swagger/fn/deal/deal-approve-customer-deal-on-demand-of-provider';
import { apiApproveCustomerDealOnDemandOfProviderRequestDtoAdapter } from '../../adapters/models/api-approve-customer-deal-on-demand-of-provider-request-dto.adapter';

// @ts-ignore
export interface DealApproveCustomerDealOnDemandOfProviderParams {
  body?: ApproveCustomerDealOnDemandOfProviderRequest;
}

export function dealApproveCustomerDealOnDemandOfProviderAdapter(params?: DealApproveCustomerDealOnDemandOfProviderParams): DealApproveCustomerDealOnDemandOfProvider$Params {
  if (!params) {
    return {} as DealApproveCustomerDealOnDemandOfProvider$Params;
  }
  return {
      body: apiApproveCustomerDealOnDemandOfProviderRequestDtoAdapter(params.body),
  };
}
