import { ParticipantOfferImportTaskGridItemAlt } from './participant-offer-import-task-grid-item-alt.interface';

export interface SearchResultOfParticipantOfferImportTaskGridItemAlt {
  currentPage: number;
  infos: ParticipantOfferImportTaskGridItemAlt[];
  showTotal: boolean;
  totalPages: number;
  totalRecords: number;
}
