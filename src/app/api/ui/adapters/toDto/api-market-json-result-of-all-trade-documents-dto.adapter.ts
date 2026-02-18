import { MarketJsonResultOfAllTradeDocuments } from '../../models/market-json-result-of-all-trade-documents.interface';
import { ApiMarketJsonResultOfAllTradeDocumentsDto } from '../../../swagger/models/api-market-json-result-of-all-trade-documents-dto';

export function adaptApiMarketJsonResultOfAllTradeDocumentsDto(source?: MarketJsonResultOfAllTradeDocuments | null): ApiMarketJsonResultOfAllTradeDocumentsDto {
  return (source ?? {}) as ApiMarketJsonResultOfAllTradeDocumentsDto;
}
