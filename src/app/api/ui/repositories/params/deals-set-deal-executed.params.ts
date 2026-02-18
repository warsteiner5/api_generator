import { DealsSetDealExecuted$Params } from '../../../swagger/fn/deals/deals-set-deal-executed';

export interface DealsSetDealExecutedParams {
  id: number;
}

export const dealsSetDealExecutedParamsAdapter = {
  adapt(params?: DealsSetDealExecutedParams): DealsSetDealExecuted$Params {
    if (!params) {
      return {} as DealsSetDealExecuted$Params;
    }
    return {
      id: params.id,
    };
  }
};
