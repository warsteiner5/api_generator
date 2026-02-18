import { DealApproveCustomerDeal$Params } from '../../../swagger/fn/deal/deal-approve-customer-deal';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { adaptApiSignatureForDealDto } from '../../adapters/toDto/api-signature-for-deal-dto.adapter';

export interface DealApproveCustomerDealParams {
  body?: SignatureForDeal;
}

export const dealApproveCustomerDealParamsAdapter = {
  adapt(params?: DealApproveCustomerDealParams): DealApproveCustomerDeal$Params {
    if (!params) {
      return {} as DealApproveCustomerDeal$Params;
    }
    return {
      body: adaptApiSignatureForDealDto(params.body),
    };
  }
};
