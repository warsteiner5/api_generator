import { TradePublishResultAlt } from '../../models/trade-publish-result-alt.interface';
import { ApiTradePublishResultAltDto } from '../../../swagger/models/api-trade-publish-result';
import { adaptApiLotSaveResultAltDto } from './api-lot-save-result.adapter';

export function adaptApiTradePublishResultAltDto(source?: TradePublishResultAlt | null): ApiTradePublishResultAltDto {
  return {
    ApplicationEndDateShiftedForImmediateTrade: source?.applicationEndDateShiftedForImmediateTrade,
    Lots: (source?.lots ?? []).map((item) => adaptApiLotSaveResultAltDto(item)),
    NewApplicationEndDate: source?.newApplicationEndDate,
    TradeId: source?.tradeId,
  };
}
