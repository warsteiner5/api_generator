import { TagParticipantView } from './tag-participant-view.interface';

export interface MarketPaginationResultOfListOfTagParticipantView {
  currentPage: number;
  items: TagParticipantView[];
  total: number;
  totalPages: number;
}
