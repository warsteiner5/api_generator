import { SearchResultOfParticipantFeedbackRatingInfo } from '../../models/search-result-of-participant-feedback-rating-info.interface';
import { ApiSearchResultOfParticipantFeedbackRatingInfoDto } from '../../../swagger/models/api-search-result-of-participant-feedback-rating-info-dto';
import { apiParticipantFeedbackRatingInfoDtoAdapter } from './api-participant-feedback-rating-info-dto.adapter';

export const apiSearchResultOfParticipantFeedbackRatingInfoDtoAdapter = (source?: SearchResultOfParticipantFeedbackRatingInfo | null): ApiSearchResultOfParticipantFeedbackRatingInfoDto => {
  return {
    CurrentPage: source?.currentPage,
    Infos: source?.infos?.map((item) => apiParticipantFeedbackRatingInfoDtoAdapter(item)),
    ShowTotal: source?.showTotal,
    TotalPages: source?.totalPages,
    TotalRecords: source?.totalRecords,
  };
}
