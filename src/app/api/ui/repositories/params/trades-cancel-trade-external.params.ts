import { TradeCanceletionRequest } from '../../models/trade-canceletion-request.interface';
import { TradesCancelTradeExternal$Params } from '../../../swagger/fn/trades/trades-cancel-trade-external';
import { apiTradeCanceletionRequestDtoAdapter } from '../../adapters/models/api-trade-canceletion-request-dto.adapter';

// @ts-ignore
export interface TradesCancelTradeExternalParams {
  body?: TradeCanceletionRequest;
}

export function tradesCancelTradeExternalAdapter(params?: TradesCancelTradeExternalParams): TradesCancelTradeExternal$Params {
  if (!params) {
    return {} as TradesCancelTradeExternal$Params;
  }
  return {
      body: apiTradeCanceletionRequestDtoAdapter(params.body),
  };
}
