import { ConcludeApprovedDealOnDemandOfCustomerRequest } from '../../models/conclude-approved-deal-on-demand-of-customer-request.interface';
import { DealConcludeApprovedDealOnDemandOfCustomer$Params } from '../../../swagger/fn/deal/deal-conclude-approved-deal-on-demand-of-customer';
import { adaptApiConcludeApprovedDealOnDemandOfCustomerRequestDto } from '../../adapters/toDto/api-conclude-approved-deal-on-demand-of-customer-request-dto.adapter';

export interface DealConcludeApprovedDealOnDemandOfCustomerParams {
  body?: ConcludeApprovedDealOnDemandOfCustomerRequest;
}

export const dealConcludeApprovedDealOnDemandOfCustomerParamsAdapter = {
  adapt(params?: DealConcludeApprovedDealOnDemandOfCustomerParams): DealConcludeApprovedDealOnDemandOfCustomer$Params {
    if (!params) {
      return {} as DealConcludeApprovedDealOnDemandOfCustomer$Params;
    }
    return {
      body: adaptApiConcludeApprovedDealOnDemandOfCustomerRequestDto(params.body),
    };
  }
};
