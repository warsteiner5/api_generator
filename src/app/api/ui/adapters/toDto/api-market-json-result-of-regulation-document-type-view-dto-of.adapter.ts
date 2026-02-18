import { MarketJsonResultOfRegulationDocumentTypeViewDtoOf } from '../../models/market-json-result-of-regulation-document-type-view-dto-of.interface';
import { ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf } from '../../../swagger/models/api-market-json-result-of-regulation-document-type-view-dto-of';

export function adaptApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf(source?: MarketJsonResultOfRegulationDocumentTypeViewDtoOf | null): ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf;
}
