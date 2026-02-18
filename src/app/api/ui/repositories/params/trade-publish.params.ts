import { Trade } from '../../models/trade.interface';
import { TradePublish$Params } from '../../../swagger/fn/trade/trade-publish';
import { adaptApiTradeDto } from '../../adapters/toDto/api-trade-dto.adapter';

export interface TradePublishParams {
  body?: Trade;
}

export const tradePublishParamsAdapter = {
  adapt(params?: TradePublishParams): TradePublish$Params {
    if (!params) {
      return {} as TradePublish$Params;
    }
    return {
      body: adaptApiTradeDto(params.body),
    };
  }
};
