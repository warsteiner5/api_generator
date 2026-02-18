import { ParticipantOfferImportTaskGridItemAlt } from './participant-offer-import-task-grid-item-alt.interface';

export interface SearchResultOfParticipantOfferImportTaskGridItem {
  currentPage: number;
  infos: ParticipantOfferImportTaskGridItemAlt[];
  showTotal: boolean;
  totalPages: number;
  totalRecords: number;
}
