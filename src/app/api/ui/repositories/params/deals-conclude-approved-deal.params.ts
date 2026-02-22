import { DealsConcludeApprovedDeal$Params } from '../../../swagger/fn/deals/deals-conclude-approved-deal';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { apiSignatureForDealDtoAdapter } from '../../adapters/models/api-signature-for-deal-dto.adapter';

// @ts-ignore
export interface DealsConcludeApprovedDealParams {
  body?: SignatureForDeal;
}

export function dealsConcludeApprovedDealAdapter(params?: DealsConcludeApprovedDealParams): DealsConcludeApprovedDeal$Params {
  if (!params) {
    return {} as DealsConcludeApprovedDeal$Params;
  }
  return {
      body: apiSignatureForDealDtoAdapter(params.body),
  };
}
