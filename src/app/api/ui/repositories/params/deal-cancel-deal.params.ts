import { DealCancelDeal$Params } from '../../../swagger/fn/deal/deal-cancel-deal';
import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { apiDealInfoForCancellationAltDtoAdapter } from '../../adapters/models/api-deal-info-for-cancellation.adapter';

// @ts-ignore
export interface DealCancelDealParams {
  body?: DealInfoForCancellationAlt;
}

export function dealCancelDealAdapter(params?: DealCancelDealParams): DealCancelDeal$Params {
  if (!params) {
    return {} as DealCancelDeal$Params;
  }
  return {
      body: apiDealInfoForCancellationAltDtoAdapter(params.body),
  };
}
