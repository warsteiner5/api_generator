import { DealConcludeApprovedDeal$Params } from '../../../swagger/fn/deal/deal-conclude-approved-deal';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { apiSignatureForDealDtoAdapter } from '../../adapters/models/api-signature-for-deal-dto.adapter';

// @ts-ignore
export interface DealConcludeApprovedDealParams {
  body?: SignatureForDeal;
}

export function dealConcludeApprovedDealAdapter(params?: DealConcludeApprovedDealParams): DealConcludeApprovedDeal$Params {
  if (!params) {
    return {} as DealConcludeApprovedDeal$Params;
  }
  return {
      body: apiSignatureForDealDtoAdapter(params.body),
  };
}
