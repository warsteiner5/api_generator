import { OrganizationFeedbackRatingDetails } from '../../models/organization-feedback-rating-details.interface';
import { ApiOrganizationFeedbackRatingDetailsDto } from '../../../swagger/models/api-organization-feedback-rating-details-dto';
import { apiQuestionAnswerDtoAdapter } from './api-question-answer-dto.adapter';

export const apiOrganizationFeedbackRatingDetailsDtoAdapter = (source?: OrganizationFeedbackRatingDetails | null): ApiOrganizationFeedbackRatingDetailsDto => {
  return {
    IsDeleted: source?.isDeleted,
    QuestionsAnswers: source?.questionsAnswers?.map((item) => apiQuestionAnswerDtoAdapter(item)),
    Rating: source?.rating,
    SourceOrganizationId: source?.sourceOrganizationId,
    SourceOrganizationName: source?.sourceOrganizationName,
  };
}
