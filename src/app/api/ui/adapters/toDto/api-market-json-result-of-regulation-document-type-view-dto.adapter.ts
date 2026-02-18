import { MarketJsonResultOfRegulationDocumentTypeView } from '../../models/market-json-result-of-regulation-document-type-view.interface';
import { ApiMarketJsonResultOfRegulationDocumentTypeViewDto } from '../../../swagger/models/api-market-json-result-of-regulation-document-type-view-dto';

export function adaptApiMarketJsonResultOfRegulationDocumentTypeViewDto(source?: MarketJsonResultOfRegulationDocumentTypeView | null): ApiMarketJsonResultOfRegulationDocumentTypeViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfRegulationDocumentTypeViewDto;
}
