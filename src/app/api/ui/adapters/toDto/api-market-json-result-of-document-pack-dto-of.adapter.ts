import { MarketJsonResultOfDocumentPackDtoOf } from '../../models/market-json-result-of-document-pack-dto-of.interface';
import { ApiMarketJsonResultOfDocumentPackDtoOf } from '../../../swagger/models/api-market-json-result-of-document-pack-dto-of';

export function adaptApiMarketJsonResultOfDocumentPackDtoOf(source?: MarketJsonResultOfDocumentPackDtoOf | null): ApiMarketJsonResultOfDocumentPackDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfDocumentPackDtoOf;
}
