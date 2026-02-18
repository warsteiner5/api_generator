import { Trade } from '../../models/trade.interface';
import { TradeSaveAsDraft$Params } from '../../../swagger/fn/trade/trade-save-as-draft';
import { adaptApiTradeDto } from '../../adapters/toDto/api-trade-dto.adapter';

export interface TradeSaveAsDraftParams {
  body?: Trade;
}

export const tradeSaveAsDraftParamsAdapter = {
  adapt(params?: TradeSaveAsDraftParams): TradeSaveAsDraft$Params {
    if (!params) {
      return {} as TradeSaveAsDraft$Params;
    }
    return {
      body: adaptApiTradeDto(params.body),
    };
  }
};
