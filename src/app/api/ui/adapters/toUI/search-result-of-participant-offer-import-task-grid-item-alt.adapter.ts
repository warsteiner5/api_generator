import { ApiSearchResultOfParticipantOfferImportTaskGridItemAltDto } from '../../../swagger/models/api-search-result-of-participant-offer-import-task-grid-item';
import { SearchResultOfParticipantOfferImportTaskGridItemAlt } from '../../models/search-result-of-participant-offer-import-task-grid-item-alt.interface';
import { adaptParticipantOfferImportTaskGridItemAltToUI } from './participant-offer-import-task-grid-item-alt.adapter';

export function adaptSearchResultOfParticipantOfferImportTaskGridItemAltToUI(source?: ApiSearchResultOfParticipantOfferImportTaskGridItemAltDto | null): SearchResultOfParticipantOfferImportTaskGridItemAlt {
  return {
    currentPage: source?.CurrentPage ?? 0,
    infos: (source?.Infos ?? []).map((item) => adaptParticipantOfferImportTaskGridItemAltToUI(item)),
    showTotal: source?.ShowTotal ?? false,
    totalPages: source?.TotalPages ?? 0,
    totalRecords: source?.TotalRecords ?? 0,
  };
}
