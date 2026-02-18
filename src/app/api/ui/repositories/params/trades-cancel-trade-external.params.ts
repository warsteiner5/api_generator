import { TradeCanceletionRequest } from '../../models/trade-canceletion-request.interface';
import { TradesCancelTradeExternal$Params } from '../../../swagger/fn/trades/trades-cancel-trade-external';
import { adaptApiTradeCanceletionRequestDto } from '../../adapters/toDto/api-trade-canceletion-request-dto.adapter';

export interface TradesCancelTradeExternalParams {
  body?: TradeCanceletionRequest;
}

export const tradesCancelTradeExternalParamsAdapter = {
  adapt(params?: TradesCancelTradeExternalParams): TradesCancelTradeExternal$Params {
    if (!params) {
      return {} as TradesCancelTradeExternal$Params;
    }
    return {
      body: adaptApiTradeCanceletionRequestDto(params.body),
    };
  }
};
