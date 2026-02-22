import { ApiSearchResultOfRegulationDocumentViewDto } from '../../../swagger/models/api-search-result-of-regulation-document-view-dto';
import { SearchResultOfRegulationDocumentView } from '../../models/search-result-of-regulation-document-view.interface';
import { regulationDocumentViewAdapter } from './regulation-document-view.adapter';

export const searchResultOfRegulationDocumentViewAdapter = (source?: ApiSearchResultOfRegulationDocumentViewDto | null): SearchResultOfRegulationDocumentView => {
  return {
    currentPage: source?.CurrentPage,
    infos: source?.Infos?.map((item) => regulationDocumentViewAdapter(item)),
    showTotal: source?.ShowTotal,
    totalPages: source?.TotalPages,
    totalRecords: source?.TotalRecords,
  };
}
