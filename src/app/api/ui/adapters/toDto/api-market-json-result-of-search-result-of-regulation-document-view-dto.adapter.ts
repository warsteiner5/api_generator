import { MarketJsonResultOfSearchResultOfRegulationDocumentView } from '../../models/market-json-result-of-search-result-of-regulation-document-view.interface';
import { ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto } from '../../../swagger/models/api-market-json-result-of-search-result-of-regulation-document-view-dto';

export function adaptApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto(source?: MarketJsonResultOfSearchResultOfRegulationDocumentView | null): ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto;
}
