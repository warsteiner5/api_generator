import { Trade } from '../../models/trade.interface';
import { TradeSaveAsDraft$Params } from '../../../swagger/fn/trade/trade-save-as-draft';
import { apiTradeDtoAdapter } from '../../adapters/models/api-trade-dto.adapter';

// @ts-ignore
export interface TradeSaveAsDraftParams {
  body?: Trade;
}

export function tradeSaveAsDraftAdapter(params?: TradeSaveAsDraftParams): TradeSaveAsDraft$Params {
  if (!params) {
    return {} as TradeSaveAsDraft$Params;
  }
  return {
      body: apiTradeDtoAdapter(params.body),
  };
}
