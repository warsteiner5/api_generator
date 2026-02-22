import { TradePublishResultAlt } from '../../models/trade-publish-result-alt.interface';
import { ApiTradePublishResultAltDto } from '../../../swagger/models/api-trade-publish-result';
import { apiLotSaveResultAltDtoAdapter } from './api-lot-save-result.adapter';

export const apiTradePublishResultAltDtoAdapter = (source?: TradePublishResultAlt | null): ApiTradePublishResultAltDto => {
  return {
    ApplicationEndDateShiftedForImmediateTrade: source?.applicationEndDateShiftedForImmediateTrade,
    Lots: source?.lots?.map((item) => apiLotSaveResultAltDtoAdapter(item)),
    NewApplicationEndDate: source?.newApplicationEndDate,
    TradeId: source?.tradeId,
  };
}
