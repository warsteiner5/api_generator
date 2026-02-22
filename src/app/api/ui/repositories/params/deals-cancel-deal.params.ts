import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { DealsCancelDeal$Params } from '../../../swagger/fn/deals/deals-cancel-deal';
import { apiDealInfoForCancellationAltDtoAdapter } from '../../adapters/models/api-deal-info-for-cancellation.adapter';

// @ts-ignore
export interface DealsCancelDealParams {
  body?: DealInfoForCancellationAlt;
}

export function dealsCancelDealAdapter(params?: DealsCancelDealParams): DealsCancelDeal$Params {
  if (!params) {
    return {} as DealsCancelDeal$Params;
  }
  return {
      body: apiDealInfoForCancellationAltDtoAdapter(params.body),
  };
}
