import { ApiTradePublishResultAltDto } from '../../../swagger/models/api-trade-publish-result';
import { TradePublishResultAlt } from '../../models/trade-publish-result-alt.interface';
import { lotSaveResultAltAdapter } from './lot-save-result-alt.adapter';

export const tradePublishResultAltAdapter = (source?: ApiTradePublishResultAltDto | null): TradePublishResultAlt => {
  return {
    applicationEndDateShiftedForImmediateTrade: source?.ApplicationEndDateShiftedForImmediateTrade,
    lots: source?.Lots?.map((item) => lotSaveResultAltAdapter(item)),
    newApplicationEndDate: source?.NewApplicationEndDate,
    tradeId: source?.TradeId,
  };
}
