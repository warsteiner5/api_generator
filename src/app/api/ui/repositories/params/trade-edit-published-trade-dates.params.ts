import { TradeDates } from '../../models/trade-dates.interface';
import { TradeEditPublishedTradeDates$Params } from '../../../swagger/fn/trade/trade-edit-published-trade-dates';
import { adaptApiTradeDatesDto } from '../../adapters/toDto/api-trade-dates-dto.adapter';

export interface TradeEditPublishedTradeDatesParams {
  body?: TradeDates;
}

export const tradeEditPublishedTradeDatesParamsAdapter = {
  adapt(params?: TradeEditPublishedTradeDatesParams): TradeEditPublishedTradeDates$Params {
    if (!params) {
      return {} as TradeEditPublishedTradeDates$Params;
    }
    return {
      body: adaptApiTradeDatesDto(params.body),
    };
  }
};
