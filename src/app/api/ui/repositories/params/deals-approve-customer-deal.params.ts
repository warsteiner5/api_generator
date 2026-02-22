import { DealsApproveCustomerDeal$Params } from '../../../swagger/fn/deals/deals-approve-customer-deal';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { apiSignatureForDealDtoAdapter } from '../../adapters/models/api-signature-for-deal-dto.adapter';

// @ts-ignore
export interface DealsApproveCustomerDealParams {
  body?: SignatureForDeal;
}

export function dealsApproveCustomerDealAdapter(params?: DealsApproveCustomerDealParams): DealsApproveCustomerDeal$Params {
  if (!params) {
    return {} as DealsApproveCustomerDeal$Params;
  }
  return {
      body: apiSignatureForDealDtoAdapter(params.body),
  };
}
