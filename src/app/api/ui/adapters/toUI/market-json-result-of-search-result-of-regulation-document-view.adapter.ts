import { ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto } from '../../../swagger/models/api-market-json-result-of-search-result-of-regulation-document-view-dto';
import { MarketJsonResultOfSearchResultOfRegulationDocumentView } from '../../models/market-json-result-of-search-result-of-regulation-document-view.interface';

export function adaptMarketJsonResultOfSearchResultOfRegulationDocumentViewToUI(source?: ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto | null): MarketJsonResultOfSearchResultOfRegulationDocumentView {
  return (source ?? {}) as MarketJsonResultOfSearchResultOfRegulationDocumentView;
}
