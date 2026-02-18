import { ExtendTrade } from '../../models/extend-trade.interface';
import { TradeExtendTradeExternal$Params } from '../../../swagger/fn/trade/trade-extend-trade-external';
import { adaptApiExtendTradeDto } from '../../adapters/toDto/api-extend-trade-dto.adapter';

export interface TradeExtendTradeExternalParams {
  body?: ExtendTrade;
}

export const tradeExtendTradeExternalParamsAdapter = {
  adapt(params?: TradeExtendTradeExternalParams): TradeExtendTradeExternal$Params {
    if (!params) {
      return {} as TradeExtendTradeExternal$Params;
    }
    return {
      body: adaptApiExtendTradeDto(params.body),
    };
  }
};
