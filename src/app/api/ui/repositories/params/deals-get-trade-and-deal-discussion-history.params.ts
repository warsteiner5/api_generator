import { DealsGetTradeAndDealDiscussionHistory$Params } from '../../../swagger/fn/deals/deals-get-trade-and-deal-discussion-history';

export interface DealsGetTradeAndDealDiscussionHistoryParams {
  dealId: number;
}

export const dealsGetTradeAndDealDiscussionHistoryParamsAdapter = {
  adapt(params?: DealsGetTradeAndDealDiscussionHistoryParams): DealsGetTradeAndDealDiscussionHistory$Params {
    if (!params) {
      return {} as DealsGetTradeAndDealDiscussionHistory$Params;
    }
    return {
      dealId: params.dealId,
    };
  }
};
