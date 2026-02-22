import { Trade } from '../../models/trade.interface';
import { TradePublish$Params } from '../../../swagger/fn/trade/trade-publish';
import { apiTradeDtoAdapter } from '../../adapters/models/api-trade-dto.adapter';

// @ts-ignore
export interface TradePublishParams {
  body?: Trade;
}

export function tradePublishAdapter(params?: TradePublishParams): TradePublish$Params {
  if (!params) {
    return {} as TradePublish$Params;
  }
  return {
      body: apiTradeDtoAdapter(params.body),
  };
}
