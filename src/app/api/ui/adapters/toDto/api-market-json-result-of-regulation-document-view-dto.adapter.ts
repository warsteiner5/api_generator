import { MarketJsonResultOfRegulationDocumentView } from '../../models/market-json-result-of-regulation-document-view.interface';
import { ApiMarketJsonResultOfRegulationDocumentViewDto } from '../../../swagger/models/api-market-json-result-of-regulation-document-view-dto';

export function adaptApiMarketJsonResultOfRegulationDocumentViewDto(source?: MarketJsonResultOfRegulationDocumentView | null): ApiMarketJsonResultOfRegulationDocumentViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfRegulationDocumentViewDto;
}
