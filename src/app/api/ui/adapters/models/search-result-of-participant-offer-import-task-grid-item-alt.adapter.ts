import { ApiSearchResultOfParticipantOfferImportTaskGridItemAltDto } from '../../../swagger/models/api-search-result-of-participant-offer-import-task-grid-item';
import { SearchResultOfParticipantOfferImportTaskGridItemAlt } from '../../models/search-result-of-participant-offer-import-task-grid-item-alt.interface';
import { participantOfferImportTaskGridItemAltAdapter } from './participant-offer-import-task-grid-item-alt.adapter';

export const searchResultOfParticipantOfferImportTaskGridItemAltAdapter = (source?: ApiSearchResultOfParticipantOfferImportTaskGridItemAltDto | null): SearchResultOfParticipantOfferImportTaskGridItemAlt => {
  return {
    currentPage: source?.CurrentPage,
    infos: source?.Infos?.map((item) => participantOfferImportTaskGridItemAltAdapter(item)),
    showTotal: source?.ShowTotal,
    totalPages: source?.TotalPages,
    totalRecords: source?.TotalRecords,
  };
}
