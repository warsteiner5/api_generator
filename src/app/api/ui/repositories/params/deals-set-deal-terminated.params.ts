import { DealsSetDealTerminated$Params } from '../../../swagger/fn/deals/deals-set-deal-terminated';
import { DealTerminateModelAlt } from '../../models/deal-terminate-model-alt.interface';
import { apiDealTerminateModelAltDtoAdapter } from '../../adapters/models/api-deal-terminate-model.adapter';

// @ts-ignore
export interface DealsSetDealTerminatedParams {
  dealId: number;
  body?: DealTerminateModelAlt;
}

export function dealsSetDealTerminatedAdapter(params?: DealsSetDealTerminatedParams): DealsSetDealTerminated$Params {
  if (!params) {
    return {} as DealsSetDealTerminated$Params;
  }
  return {
      dealId: params.dealId,
      body: apiDealTerminateModelAltDtoAdapter(params.body),
  };
}
