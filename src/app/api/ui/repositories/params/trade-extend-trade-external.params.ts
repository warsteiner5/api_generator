import { ExtendTrade } from '../../models/extend-trade.interface';
import { TradeExtendTradeExternal$Params } from '../../../swagger/fn/trade/trade-extend-trade-external';
import { apiExtendTradeDtoAdapter } from '../../adapters/models/api-extend-trade-dto.adapter';

// @ts-ignore
export interface TradeExtendTradeExternalParams {
  body?: ExtendTrade;
}

export function tradeExtendTradeExternalAdapter(params?: TradeExtendTradeExternalParams): TradeExtendTradeExternal$Params {
  if (!params) {
    return {} as TradeExtendTradeExternal$Params;
  }
  return {
      body: apiExtendTradeDtoAdapter(params.body),
  };
}
