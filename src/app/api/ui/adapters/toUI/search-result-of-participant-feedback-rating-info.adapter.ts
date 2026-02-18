import { ApiSearchResultOfParticipantFeedbackRatingInfoDto } from '../../../swagger/models/api-search-result-of-participant-feedback-rating-info-dto';
import { SearchResultOfParticipantFeedbackRatingInfo } from '../../models/search-result-of-participant-feedback-rating-info.interface';
import { adaptParticipantFeedbackRatingInfoToUI } from './participant-feedback-rating-info.adapter';

export function adaptSearchResultOfParticipantFeedbackRatingInfoToUI(source?: ApiSearchResultOfParticipantFeedbackRatingInfoDto | null): SearchResultOfParticipantFeedbackRatingInfo {
  return {
    currentPage: source?.CurrentPage ?? 0,
    infos: (source?.Infos ?? []).map((item) => adaptParticipantFeedbackRatingInfoToUI(item)),
    showTotal: source?.ShowTotal ?? false,
    totalPages: source?.TotalPages ?? 0,
    totalRecords: source?.TotalRecords ?? 0,
  };
}
