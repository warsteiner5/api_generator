import { TradeDates } from '../../models/trade-dates.interface';
import { TradeEditPublishedTradeDates$Params } from '../../../swagger/fn/trade/trade-edit-published-trade-dates';
import { apiTradeDatesDtoAdapter } from '../../adapters/models/api-trade-dates-dto.adapter';

// @ts-ignore
export interface TradeEditPublishedTradeDatesParams {
  body?: TradeDates;
}

export function tradeEditPublishedTradeDatesAdapter(params?: TradeEditPublishedTradeDatesParams): TradeEditPublishedTradeDates$Params {
  if (!params) {
    return {} as TradeEditPublishedTradeDates$Params;
  }
  return {
      body: apiTradeDatesDtoAdapter(params.body),
  };
}
