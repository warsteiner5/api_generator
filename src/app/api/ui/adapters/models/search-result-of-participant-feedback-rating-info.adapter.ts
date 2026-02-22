import { ApiSearchResultOfParticipantFeedbackRatingInfoDto } from '../../../swagger/models/api-search-result-of-participant-feedback-rating-info-dto';
import { SearchResultOfParticipantFeedbackRatingInfo } from '../../models/search-result-of-participant-feedback-rating-info.interface';
import { participantFeedbackRatingInfoAdapter } from './participant-feedback-rating-info.adapter';

export const searchResultOfParticipantFeedbackRatingInfoAdapter = (source?: ApiSearchResultOfParticipantFeedbackRatingInfoDto | null): SearchResultOfParticipantFeedbackRatingInfo => {
  return {
    currentPage: source?.CurrentPage,
    infos: source?.Infos?.map((item) => participantFeedbackRatingInfoAdapter(item)),
    showTotal: source?.ShowTotal,
    totalPages: source?.TotalPages,
    totalRecords: source?.TotalRecords,
  };
}
