import { SearchResultOfRegulationDocumentView } from '../../models/search-result-of-regulation-document-view.interface';
import { ApiSearchResultOfRegulationDocumentViewDto } from '../../../swagger/models/api-search-result-of-regulation-document-view-dto';
import { adaptApiRegulationDocumentViewDto } from './api-regulation-document-view-dto.adapter';

export function adaptApiSearchResultOfRegulationDocumentViewDto(source?: SearchResultOfRegulationDocumentView | null): ApiSearchResultOfRegulationDocumentViewDto {
  return {
    CurrentPage: source?.currentPage,
    Infos: (source?.infos ?? []).map((item) => adaptApiRegulationDocumentViewDto(item)),
    ShowTotal: source?.showTotal,
    TotalPages: source?.totalPages,
    TotalRecords: source?.totalRecords,
  };
}
