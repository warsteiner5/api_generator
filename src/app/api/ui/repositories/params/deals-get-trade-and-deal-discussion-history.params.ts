import { DealsGetTradeAndDealDiscussionHistory$Params } from '../../../swagger/fn/deals/deals-get-trade-and-deal-discussion-history';

// @ts-ignore
export interface DealsGetTradeAndDealDiscussionHistoryParams {
  dealId: number;
}

export function dealsGetTradeAndDealDiscussionHistoryAdapter(params?: DealsGetTradeAndDealDiscussionHistoryParams): DealsGetTradeAndDealDiscussionHistory$Params {
  if (!params) {
    return {} as DealsGetTradeAndDealDiscussionHistory$Params;
  }
  return {
      dealId: params.dealId,
  };
}
