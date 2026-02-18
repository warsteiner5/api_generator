import { ApiMarketJsonResultOfRegulationDocumentViewDto } from '../../../swagger/models/api-market-json-result-of-regulation-document-view-dto';
import { MarketJsonResultOfRegulationDocumentView } from '../../models/market-json-result-of-regulation-document-view.interface';

export function adaptMarketJsonResultOfRegulationDocumentViewToUI(source?: ApiMarketJsonResultOfRegulationDocumentViewDto | null): MarketJsonResultOfRegulationDocumentView {
  return (source ?? {}) as MarketJsonResultOfRegulationDocumentView;
}
