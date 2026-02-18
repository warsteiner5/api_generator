import { ApiMarketJsonResultOfAllTradeDocumentsDto } from '../../../swagger/models/api-market-json-result-of-all-trade-documents-dto';
import { MarketJsonResultOfAllTradeDocuments } from '../../models/market-json-result-of-all-trade-documents.interface';

export function adaptMarketJsonResultOfAllTradeDocumentsToUI(source?: ApiMarketJsonResultOfAllTradeDocumentsDto | null): MarketJsonResultOfAllTradeDocuments {
  return (source ?? {}) as MarketJsonResultOfAllTradeDocuments;
}
