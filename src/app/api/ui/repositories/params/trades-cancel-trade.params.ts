import { TradeCanceletionRequest } from '../../models/trade-canceletion-request.interface';
import { TradesCancelTrade$Params } from '../../../swagger/fn/trades/trades-cancel-trade';
import { apiTradeCanceletionRequestDtoAdapter } from '../../adapters/models/api-trade-canceletion-request-dto.adapter';

// @ts-ignore
export interface TradesCancelTradeParams {
  body?: TradeCanceletionRequest;
}

export function tradesCancelTradeAdapter(params?: TradesCancelTradeParams): TradesCancelTrade$Params {
  if (!params) {
    return {} as TradesCancelTrade$Params;
  }
  return {
      body: apiTradeCanceletionRequestDtoAdapter(params.body),
  };
}
