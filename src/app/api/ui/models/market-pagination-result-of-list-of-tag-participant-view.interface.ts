import { TagParticipantView } from './tag-participant-view.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfTagParticipantView {
  currentPage: number;
  items: TagParticipantView[];
  total: number;
  totalPages: number;
}
