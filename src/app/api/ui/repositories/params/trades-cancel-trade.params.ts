import { TradeCanceletionRequest } from '../../models/trade-canceletion-request.interface';
import { TradesCancelTrade$Params } from '../../../swagger/fn/trades/trades-cancel-trade';
import { adaptApiTradeCanceletionRequestDto } from '../../adapters/toDto/api-trade-canceletion-request-dto.adapter';

export interface TradesCancelTradeParams {
  body?: TradeCanceletionRequest;
}

export const tradesCancelTradeParamsAdapter = {
  adapt(params?: TradesCancelTradeParams): TradesCancelTrade$Params {
    if (!params) {
      return {} as TradesCancelTrade$Params;
    }
    return {
      body: adaptApiTradeCanceletionRequestDto(params.body),
    };
  }
};
