import { SearchResultOfParticipantFeedbackRatingInfo } from '../../models/search-result-of-participant-feedback-rating-info.interface';
import { ApiSearchResultOfParticipantFeedbackRatingInfoDto } from '../../../swagger/models/api-search-result-of-participant-feedback-rating-info-dto';
import { adaptApiParticipantFeedbackRatingInfoDto } from './api-participant-feedback-rating-info-dto.adapter';

export function adaptApiSearchResultOfParticipantFeedbackRatingInfoDto(source?: SearchResultOfParticipantFeedbackRatingInfo | null): ApiSearchResultOfParticipantFeedbackRatingInfoDto {
  return {
    CurrentPage: source?.currentPage,
    Infos: (source?.infos ?? []).map((item) => adaptApiParticipantFeedbackRatingInfoDto(item)),
    ShowTotal: source?.showTotal,
    TotalPages: source?.totalPages,
    TotalRecords: source?.totalRecords,
  };
}
