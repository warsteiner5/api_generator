import { DealSetDealExecuted$Params } from '../../../swagger/fn/deal/deal-set-deal-executed';

export interface DealSetDealExecutedParams {
  id: number;
}

export const dealSetDealExecutedParamsAdapter = {
  adapt(params?: DealSetDealExecutedParams): DealSetDealExecuted$Params {
    if (!params) {
      return {} as DealSetDealExecuted$Params;
    }
    return {
      id: params.id,
    };
  }
};
