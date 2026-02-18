import { ApiMarketJsonResultOfImportExcelParticipantOfferToTradeResult } from '../../../swagger/models/api-market-json-result-of-import-excel-participant-offer-to-trade-result';
import { MarketJsonResultOfImportExcelParticipantOfferToTradeResult } from '../../models/market-json-result-of-import-excel-participant-offer-to-trade-result.interface';

export function adaptMarketJsonResultOfImportExcelParticipantOfferToTradeResultToUI(source?: ApiMarketJsonResultOfImportExcelParticipantOfferToTradeResult | null): MarketJsonResultOfImportExcelParticipantOfferToTradeResult {
  return (source ?? {}) as MarketJsonResultOfImportExcelParticipantOfferToTradeResult;
}
