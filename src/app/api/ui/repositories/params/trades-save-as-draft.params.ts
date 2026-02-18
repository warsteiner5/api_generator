import { TradeDto2 } from '../../models/trade-dto-2.interface';
import { TradesSaveAsDraft$Params } from '../../../swagger/fn/trades/trades-save-as-draft';
import { adaptApiTradeDto2 } from '../../adapters/toDto/api-trade-dto-2.adapter';

export interface TradesSaveAsDraftParams {
  body?: TradeDto2;
}

export const tradesSaveAsDraftParamsAdapter = {
  adapt(params?: TradesSaveAsDraftParams): TradesSaveAsDraft$Params {
    if (!params) {
      return {} as TradesSaveAsDraft$Params;
    }
    return {
      body: adaptApiTradeDto2(params.body),
    };
  }
};
