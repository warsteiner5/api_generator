import { SearchResultOfParticipantOfferImportTaskGridItemAlt } from '../../models/search-result-of-participant-offer-import-task-grid-item-alt.interface';
import { ApiSearchResultOfParticipantOfferImportTaskGridItemAltDto } from '../../../swagger/models/api-search-result-of-participant-offer-import-task-grid-item';
import { adaptApiParticipantOfferImportTaskGridItemAltDto } from './api-participant-offer-import-task-grid-item.adapter';

export function adaptApiSearchResultOfParticipantOfferImportTaskGridItemAltDto(source?: SearchResultOfParticipantOfferImportTaskGridItemAlt | null): ApiSearchResultOfParticipantOfferImportTaskGridItemAltDto {
  return {
    CurrentPage: source?.currentPage,
    Infos: (source?.infos ?? []).map((item) => adaptApiParticipantOfferImportTaskGridItemAltDto(item)),
    ShowTotal: source?.showTotal,
    TotalPages: source?.totalPages,
    TotalRecords: source?.totalRecords,
  };
}
