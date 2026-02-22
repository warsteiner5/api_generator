import { DealApproveCustomerDeal$Params } from '../../../swagger/fn/deal/deal-approve-customer-deal';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { apiSignatureForDealDtoAdapter } from '../../adapters/models/api-signature-for-deal-dto.adapter';

// @ts-ignore
export interface DealApproveCustomerDealParams {
  body?: SignatureForDeal;
}

export function dealApproveCustomerDealAdapter(params?: DealApproveCustomerDealParams): DealApproveCustomerDeal$Params {
  if (!params) {
    return {} as DealApproveCustomerDeal$Params;
  }
  return {
      body: apiSignatureForDealDtoAdapter(params.body),
  };
}
