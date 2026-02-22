import { ConcludeApprovedDealOnDemandOfCustomerRequest } from '../../models/conclude-approved-deal-on-demand-of-customer-request.interface';
import { DealConcludeApprovedDealOnDemandOfCustomer$Params } from '../../../swagger/fn/deal/deal-conclude-approved-deal-on-demand-of-customer';
import { apiConcludeApprovedDealOnDemandOfCustomerRequestDtoAdapter } from '../../adapters/models/api-conclude-approved-deal-on-demand-of-customer-request-dto.adapter';

// @ts-ignore
export interface DealConcludeApprovedDealOnDemandOfCustomerParams {
  body?: ConcludeApprovedDealOnDemandOfCustomerRequest;
}

export function dealConcludeApprovedDealOnDemandOfCustomerAdapter(params?: DealConcludeApprovedDealOnDemandOfCustomerParams): DealConcludeApprovedDealOnDemandOfCustomer$Params {
  if (!params) {
    return {} as DealConcludeApprovedDealOnDemandOfCustomer$Params;
  }
  return {
      body: apiConcludeApprovedDealOnDemandOfCustomerRequestDtoAdapter(params.body),
  };
}
