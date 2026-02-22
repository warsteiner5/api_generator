import { DealsConcludeApprovedExternalDeal$Params } from '../../../swagger/fn/deals/deals-conclude-approved-external-deal';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { apiSignatureForDealDtoAdapter } from '../../adapters/models/api-signature-for-deal-dto.adapter';

// @ts-ignore
export interface DealsConcludeApprovedExternalDealParams {
  dealId: number;
  organizationId: number;
  userId: number;
  body?: SignatureForDeal;
}

export function dealsConcludeApprovedExternalDealAdapter(params?: DealsConcludeApprovedExternalDealParams): DealsConcludeApprovedExternalDeal$Params {
  if (!params) {
    return {} as DealsConcludeApprovedExternalDeal$Params;
  }
  return {
      dealId: params.dealId,
      organizationId: params.organizationId,
      userId: params.userId,
      body: apiSignatureForDealDtoAdapter(params.body),
  };
}
