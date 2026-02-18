import { MarketJsonResultOfApplicationDocument } from '../../models/market-json-result-of-application-document.interface';
import { ApiMarketJsonResultOfApplicationDocumentDto } from '../../../swagger/models/api-market-json-result-of-application-document-dto';

export function adaptApiMarketJsonResultOfApplicationDocumentDto(source?: MarketJsonResultOfApplicationDocument | null): ApiMarketJsonResultOfApplicationDocumentDto {
  return (source ?? {}) as ApiMarketJsonResultOfApplicationDocumentDto;
}
