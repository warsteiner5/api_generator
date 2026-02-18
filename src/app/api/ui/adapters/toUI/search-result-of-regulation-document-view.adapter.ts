import { ApiSearchResultOfRegulationDocumentViewDto } from '../../../swagger/models/api-search-result-of-regulation-document-view-dto';
import { SearchResultOfRegulationDocumentView } from '../../models/search-result-of-regulation-document-view.interface';
import { adaptRegulationDocumentViewToUI } from './regulation-document-view.adapter';

export function adaptSearchResultOfRegulationDocumentViewToUI(source?: ApiSearchResultOfRegulationDocumentViewDto | null): SearchResultOfRegulationDocumentView {
  return {
    currentPage: source?.CurrentPage ?? 0,
    infos: (source?.Infos ?? []).map((item) => adaptRegulationDocumentViewToUI(item)),
    showTotal: source?.ShowTotal ?? false,
    totalPages: source?.TotalPages ?? 0,
    totalRecords: source?.TotalRecords ?? 0,
  };
}
