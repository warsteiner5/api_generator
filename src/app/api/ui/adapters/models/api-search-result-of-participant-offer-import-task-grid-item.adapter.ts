import { SearchResultOfParticipantOfferImportTaskGridItemAlt } from '../../models/search-result-of-participant-offer-import-task-grid-item-alt.interface';
import { ApiSearchResultOfParticipantOfferImportTaskGridItemAltDto } from '../../../swagger/models/api-search-result-of-participant-offer-import-task-grid-item';
import { apiParticipantOfferImportTaskGridItemAltDtoAdapter } from './api-participant-offer-import-task-grid-item.adapter';

export const apiSearchResultOfParticipantOfferImportTaskGridItemAltDtoAdapter = (source?: SearchResultOfParticipantOfferImportTaskGridItemAlt | null): ApiSearchResultOfParticipantOfferImportTaskGridItemAltDto => {
  return {
    CurrentPage: source?.currentPage,
    Infos: source?.infos?.map((item) => apiParticipantOfferImportTaskGridItemAltDtoAdapter(item)),
    ShowTotal: source?.showTotal,
    TotalPages: source?.totalPages,
    TotalRecords: source?.totalRecords,
  };
}
