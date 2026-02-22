import { Trade } from '../../models/trade.interface';
import { TradeEditPublishedTradeByExternalSystem$Params } from '../../../swagger/fn/trade/trade-edit-published-trade-by-external-system';
import { apiTradeDtoAdapter } from '../../adapters/models/api-trade-dto.adapter';

// @ts-ignore
export interface TradeEditPublishedTradeByExternalSystemParams {
  body?: Trade;
}

export function tradeEditPublishedTradeByExternalSystemAdapter(params?: TradeEditPublishedTradeByExternalSystemParams): TradeEditPublishedTradeByExternalSystem$Params {
  if (!params) {
    return {} as TradeEditPublishedTradeByExternalSystem$Params;
  }
  return {
      body: apiTradeDtoAdapter(params.body),
  };
}
