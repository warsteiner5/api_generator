import { ParticipantFeedbackRatingInfo } from './participant-feedback-rating-info.interface';

// @ts-ignore
export interface SearchResultOfParticipantFeedbackRatingInfo {
  currentPage: number;
  infos: ParticipantFeedbackRatingInfo[];
  showTotal: boolean;
  totalPages: number;
  totalRecords: number;
}
