import { TradeDto2 } from '../../models/trade-dto-2.interface';
import { TradesSaveAsDraft$Params } from '../../../swagger/fn/trades/trades-save-as-draft';
import { apiTradeDto2Adapter } from '../../adapters/models/api-trade-dto-2.adapter';

// @ts-ignore
export interface TradesSaveAsDraftParams {
  body?: TradeDto2;
}

export function tradesSaveAsDraftAdapter(params?: TradesSaveAsDraftParams): TradesSaveAsDraft$Params {
  if (!params) {
    return {} as TradesSaveAsDraft$Params;
  }
  return {
      body: apiTradeDto2Adapter(params.body),
  };
}
