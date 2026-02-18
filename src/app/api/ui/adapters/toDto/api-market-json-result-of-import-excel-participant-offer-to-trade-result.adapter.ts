import { MarketJsonResultOfImportExcelParticipantOfferToTradeResult } from '../../models/market-json-result-of-import-excel-participant-offer-to-trade-result.interface';
import { ApiMarketJsonResultOfImportExcelParticipantOfferToTradeResult } from '../../../swagger/models/api-market-json-result-of-import-excel-participant-offer-to-trade-result';

export function adaptApiMarketJsonResultOfImportExcelParticipantOfferToTradeResult(source?: MarketJsonResultOfImportExcelParticipantOfferToTradeResult | null): ApiMarketJsonResultOfImportExcelParticipantOfferToTradeResult {
  return (source ?? {}) as ApiMarketJsonResultOfImportExcelParticipantOfferToTradeResult;
}
