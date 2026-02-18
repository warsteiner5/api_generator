import { DealsGetTradeActualDeal$Params } from '../../../swagger/fn/deals/deals-get-trade-actual-deal';

export interface DealsGetTradeActualDealParams {
  id: number;
}

export const dealsGetTradeActualDealParamsAdapter = {
  adapt(params?: DealsGetTradeActualDealParams): DealsGetTradeActualDeal$Params {
    if (!params) {
      return {} as DealsGetTradeActualDeal$Params;
    }
    return {
      id: params.id,
    };
  }
};
