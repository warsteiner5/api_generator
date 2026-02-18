import { ApiMarketJsonResultOfApplicationDocumentDto } from '../../../swagger/models/api-market-json-result-of-application-document-dto';
import { MarketJsonResultOfApplicationDocument } from '../../models/market-json-result-of-application-document.interface';

export function adaptMarketJsonResultOfApplicationDocumentToUI(source?: ApiMarketJsonResultOfApplicationDocumentDto | null): MarketJsonResultOfApplicationDocument {
  return (source ?? {}) as MarketJsonResultOfApplicationDocument;
}
