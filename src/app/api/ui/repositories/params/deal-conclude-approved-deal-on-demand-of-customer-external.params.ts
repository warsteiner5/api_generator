import { ConcludeApprovedDealOnDemandOfCustomerRequest } from '../../models/conclude-approved-deal-on-demand-of-customer-request.interface';
import { DealConcludeApprovedDealOnDemandOfCustomerExternal$Params } from '../../../swagger/fn/deal/deal-conclude-approved-deal-on-demand-of-customer-external';
import { adaptApiConcludeApprovedDealOnDemandOfCustomerRequestDto } from '../../adapters/toDto/api-conclude-approved-deal-on-demand-of-customer-request-dto.adapter';

export interface DealConcludeApprovedDealOnDemandOfCustomerExternalParams {
  body?: ConcludeApprovedDealOnDemandOfCustomerRequest;
}

export const dealConcludeApprovedDealOnDemandOfCustomerExternalParamsAdapter = {
  adapt(params?: DealConcludeApprovedDealOnDemandOfCustomerExternalParams): DealConcludeApprovedDealOnDemandOfCustomerExternal$Params {
    if (!params) {
      return {} as DealConcludeApprovedDealOnDemandOfCustomerExternal$Params;
    }
    return {
      body: adaptApiConcludeApprovedDealOnDemandOfCustomerRequestDto(params.body),
    };
  }
};
