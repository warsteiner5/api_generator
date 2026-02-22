import { DealSetDealTerminated$Params } from '../../../swagger/fn/deal/deal-set-deal-terminated';

// @ts-ignore
export interface DealSetDealTerminatedParams {
  id: number;
}

export function dealSetDealTerminatedAdapter(params?: DealSetDealTerminatedParams): DealSetDealTerminated$Params {
  if (!params) {
    return {} as DealSetDealTerminated$Params;
  }
  return {
      id: params.id,
  };
}
