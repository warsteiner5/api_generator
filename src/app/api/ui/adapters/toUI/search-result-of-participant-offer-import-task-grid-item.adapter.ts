import { ApiSearchResultOfParticipantOfferImportTaskGridItem } from '../../../swagger/models/api-search-result-of-participant-offer-import-task-grid-item';
import { SearchResultOfParticipantOfferImportTaskGridItem } from '../../models/search-result-of-participant-offer-import-task-grid-item.interface';
import { adaptParticipantOfferImportTaskGridItemAltToUI } from './participant-offer-import-task-grid-item-alt.adapter';

export function adaptSearchResultOfParticipantOfferImportTaskGridItemToUI(source?: ApiSearchResultOfParticipantOfferImportTaskGridItem | null): SearchResultOfParticipantOfferImportTaskGridItem {
  return {
    currentPage: source?.CurrentPage ?? 0,
    infos: (source?.Infos ?? []).map((item) => adaptParticipantOfferImportTaskGridItemAltToUI(item)),
    showTotal: source?.ShowTotal ?? false,
    totalPages: source?.TotalPages ?? 0,
    totalRecords: source?.TotalRecords ?? 0,
  };
}
