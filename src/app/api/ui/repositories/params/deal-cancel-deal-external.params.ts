import { DealCancelDealExternal$Params } from '../../../swagger/fn/deal/deal-cancel-deal-external';
import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { apiDealInfoForCancellationAltDtoAdapter } from '../../adapters/models/api-deal-info-for-cancellation.adapter';

// @ts-ignore
export interface DealCancelDealExternalParams {
  body?: DealInfoForCancellationAlt;
}

export function dealCancelDealExternalAdapter(params?: DealCancelDealExternalParams): DealCancelDealExternal$Params {
  if (!params) {
    return {} as DealCancelDealExternal$Params;
  }
  return {
      body: apiDealInfoForCancellationAltDtoAdapter(params.body),
  };
}
