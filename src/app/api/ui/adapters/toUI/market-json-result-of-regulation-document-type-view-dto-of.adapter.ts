import { ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf } from '../../../swagger/models/api-market-json-result-of-regulation-document-type-view-dto-of';
import { MarketJsonResultOfRegulationDocumentTypeViewDtoOf } from '../../models/market-json-result-of-regulation-document-type-view-dto-of.interface';

export function adaptMarketJsonResultOfRegulationDocumentTypeViewDtoOfToUI(source?: ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf | null): MarketJsonResultOfRegulationDocumentTypeViewDtoOf {
  return (source ?? {}) as MarketJsonResultOfRegulationDocumentTypeViewDtoOf;
}
