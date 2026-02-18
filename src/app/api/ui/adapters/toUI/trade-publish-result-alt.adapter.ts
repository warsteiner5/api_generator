import { ApiTradePublishResultAltDto } from '../../../swagger/models/api-trade-publish-result';
import { TradePublishResultAlt } from '../../models/trade-publish-result-alt.interface';
import { adaptLotSaveResultAltToUI } from './lot-save-result-alt.adapter';

export function adaptTradePublishResultAltToUI(source?: ApiTradePublishResultAltDto | null): TradePublishResultAlt {
  return {
    applicationEndDateShiftedForImmediateTrade: source?.ApplicationEndDateShiftedForImmediateTrade ?? false,
    lots: (source?.Lots ?? []).map((item) => adaptLotSaveResultAltToUI(item)),
    newApplicationEndDate: source?.NewApplicationEndDate ?? '',
    tradeId: source?.TradeId ?? 0,
  };
}
