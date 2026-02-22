import { ExternalDealsGetExternalDealTrade$Params } from '../../../swagger/fn/external-deals/external-deals-get-external-deal-trade';

// @ts-ignore
export interface ExternalDealsGetExternalDealTradeParams {
  tradeId: number;
}

export function externalDealsGetExternalDealTradeAdapter(params?: ExternalDealsGetExternalDealTradeParams): ExternalDealsGetExternalDealTrade$Params {
  if (!params) {
    return {} as ExternalDealsGetExternalDealTrade$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
