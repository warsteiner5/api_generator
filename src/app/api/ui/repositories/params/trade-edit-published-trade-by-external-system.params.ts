import { Trade } from '../../models/trade.interface';
import { TradeEditPublishedTradeByExternalSystem$Params } from '../../../swagger/fn/trade/trade-edit-published-trade-by-external-system';
import { adaptApiTradeDto } from '../../adapters/toDto/api-trade-dto.adapter';

export interface TradeEditPublishedTradeByExternalSystemParams {
  body?: Trade;
}

export const tradeEditPublishedTradeByExternalSystemParamsAdapter = {
  adapt(params?: TradeEditPublishedTradeByExternalSystemParams): TradeEditPublishedTradeByExternalSystem$Params {
    if (!params) {
      return {} as TradeEditPublishedTradeByExternalSystem$Params;
    }
    return {
      body: adaptApiTradeDto(params.body),
    };
  }
};
