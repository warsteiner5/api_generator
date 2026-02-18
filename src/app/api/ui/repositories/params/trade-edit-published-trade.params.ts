import { Trade } from '../../models/trade.interface';
import { TradeEditPublishedTrade$Params } from '../../../swagger/fn/trade/trade-edit-published-trade';
import { adaptApiTradeDto } from '../../adapters/toDto/api-trade-dto.adapter';

export interface TradeEditPublishedTradeParams {
  body?: Trade;
}

export const tradeEditPublishedTradeParamsAdapter = {
  adapt(params?: TradeEditPublishedTradeParams): TradeEditPublishedTrade$Params {
    if (!params) {
      return {} as TradeEditPublishedTrade$Params;
    }
    return {
      body: adaptApiTradeDto(params.body),
    };
  }
};
