import { ApiMarketJsonResultOfDocumentPackDtoOf } from '../../../swagger/models/api-market-json-result-of-document-pack-dto-of';
import { MarketJsonResultOfDocumentPackDtoOf } from '../../models/market-json-result-of-document-pack-dto-of.interface';

export function adaptMarketJsonResultOfDocumentPackDtoOfToUI(source?: ApiMarketJsonResultOfDocumentPackDtoOf | null): MarketJsonResultOfDocumentPackDtoOf {
  return (source ?? {}) as MarketJsonResultOfDocumentPackDtoOf;
}
