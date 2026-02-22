import { Trade } from '../../models/trade.interface';
import { TradeEditPublishedTrade$Params } from '../../../swagger/fn/trade/trade-edit-published-trade';
import { apiTradeDtoAdapter } from '../../adapters/models/api-trade-dto.adapter';

// @ts-ignore
export interface TradeEditPublishedTradeParams {
  body?: Trade;
}

export function tradeEditPublishedTradeAdapter(params?: TradeEditPublishedTradeParams): TradeEditPublishedTrade$Params {
  if (!params) {
    return {} as TradeEditPublishedTrade$Params;
  }
  return {
      body: apiTradeDtoAdapter(params.body),
  };
}
