import { SearchResultOfParticipantOfferImportTaskGridItem } from '../../models/search-result-of-participant-offer-import-task-grid-item.interface';
import { ApiSearchResultOfParticipantOfferImportTaskGridItem } from '../../../swagger/models/api-search-result-of-participant-offer-import-task-grid-item';
import { adaptApiParticipantOfferImportTaskGridItemAltDto } from './api-participant-offer-import-task-grid-item.adapter';

export function adaptApiSearchResultOfParticipantOfferImportTaskGridItem(source?: SearchResultOfParticipantOfferImportTaskGridItem | null): ApiSearchResultOfParticipantOfferImportTaskGridItem {
  return {
    CurrentPage: source?.currentPage,
    Infos: (source?.infos ?? []).map((item) => adaptApiParticipantOfferImportTaskGridItemAltDto(item)),
    ShowTotal: source?.showTotal,
    TotalPages: source?.totalPages,
    TotalRecords: source?.totalRecords,
  };
}
