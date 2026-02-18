import { ApiMarketJsonResultOfRegulationDocumentTypeViewDto } from '../../../swagger/models/api-market-json-result-of-regulation-document-type-view-dto';
import { MarketJsonResultOfRegulationDocumentTypeView } from '../../models/market-json-result-of-regulation-document-type-view.interface';

export function adaptMarketJsonResultOfRegulationDocumentTypeViewToUI(source?: ApiMarketJsonResultOfRegulationDocumentTypeViewDto | null): MarketJsonResultOfRegulationDocumentTypeView {
  return (source ?? {}) as MarketJsonResultOfRegulationDocumentTypeView;
}
