import { DealSetDealTerminated$Params } from '../../../swagger/fn/deal/deal-set-deal-terminated';

export interface DealSetDealTerminatedParams {
  id: number;
}

export const dealSetDealTerminatedParamsAdapter = {
  adapt(params?: DealSetDealTerminatedParams): DealSetDealTerminated$Params {
    if (!params) {
      return {} as DealSetDealTerminated$Params;
    }
    return {
      id: params.id,
    };
  }
};
