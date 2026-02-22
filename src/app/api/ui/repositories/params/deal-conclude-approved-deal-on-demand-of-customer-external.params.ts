import { ConcludeApprovedDealOnDemandOfCustomerRequest } from '../../models/conclude-approved-deal-on-demand-of-customer-request.interface';
import { DealConcludeApprovedDealOnDemandOfCustomerExternal$Params } from '../../../swagger/fn/deal/deal-conclude-approved-deal-on-demand-of-customer-external';
import { apiConcludeApprovedDealOnDemandOfCustomerRequestDtoAdapter } from '../../adapters/models/api-conclude-approved-deal-on-demand-of-customer-request-dto.adapter';

// @ts-ignore
export interface DealConcludeApprovedDealOnDemandOfCustomerExternalParams {
  body?: ConcludeApprovedDealOnDemandOfCustomerRequest;
}

export function dealConcludeApprovedDealOnDemandOfCustomerExternalAdapter(params?: DealConcludeApprovedDealOnDemandOfCustomerExternalParams): DealConcludeApprovedDealOnDemandOfCustomerExternal$Params {
  if (!params) {
    return {} as DealConcludeApprovedDealOnDemandOfCustomerExternal$Params;
  }
  return {
      body: apiConcludeApprovedDealOnDemandOfCustomerRequestDtoAdapter(params.body),
  };
}
