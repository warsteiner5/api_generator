import { DealsApproveCustomerDeal$Params } from '../../../swagger/fn/deals/deals-approve-customer-deal';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { adaptApiSignatureForDealDto } from '../../adapters/toDto/api-signature-for-deal-dto.adapter';

export interface DealsApproveCustomerDealParams {
  body?: SignatureForDeal;
}

export const dealsApproveCustomerDealParamsAdapter = {
  adapt(params?: DealsApproveCustomerDealParams): DealsApproveCustomerDeal$Params {
    if (!params) {
      return {} as DealsApproveCustomerDeal$Params;
    }
    return {
      body: adaptApiSignatureForDealDto(params.body),
    };
  }
};
