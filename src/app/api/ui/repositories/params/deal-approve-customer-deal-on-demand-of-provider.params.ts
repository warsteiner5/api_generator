import { ApproveCustomerDealOnDemandOfProviderRequest } from '../../models/approve-customer-deal-on-demand-of-provider-request.interface';
import { DealApproveCustomerDealOnDemandOfProvider$Params } from '../../../swagger/fn/deal/deal-approve-customer-deal-on-demand-of-provider';
import { adaptApiApproveCustomerDealOnDemandOfProviderRequestDto } from '../../adapters/toDto/api-approve-customer-deal-on-demand-of-provider-request-dto.adapter';

export interface DealApproveCustomerDealOnDemandOfProviderParams {
  body?: ApproveCustomerDealOnDemandOfProviderRequest;
}

export const dealApproveCustomerDealOnDemandOfProviderParamsAdapter = {
  adapt(params?: DealApproveCustomerDealOnDemandOfProviderParams): DealApproveCustomerDealOnDemandOfProvider$Params {
    if (!params) {
      return {} as DealApproveCustomerDealOnDemandOfProvider$Params;
    }
    return {
      body: adaptApiApproveCustomerDealOnDemandOfProviderRequestDto(params.body),
    };
  }
};
