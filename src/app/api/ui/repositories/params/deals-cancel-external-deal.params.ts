import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { DealsCancelExternalDeal$Params } from '../../../swagger/fn/deals/deals-cancel-external-deal';
import { apiDealInfoForCancellationAltDtoAdapter } from '../../adapters/models/api-deal-info-for-cancellation.adapter';

// @ts-ignore
export interface DealsCancelExternalDealParams {
  dealId: number;
  organizationId: number;
  userId: number;
  body?: DealInfoForCancellationAlt;
}

export function dealsCancelExternalDealAdapter(params?: DealsCancelExternalDealParams): DealsCancelExternalDeal$Params {
  if (!params) {
    return {} as DealsCancelExternalDeal$Params;
  }
  return {
      dealId: params.dealId,
      organizationId: params.organizationId,
      userId: params.userId,
      body: apiDealInfoForCancellationAltDtoAdapter(params.body),
  };
}
