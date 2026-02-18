import { OrganizationFeedbackRatingDetails } from '../../models/organization-feedback-rating-details.interface';
import { ApiOrganizationFeedbackRatingDetailsDto } from '../../../swagger/models/api-organization-feedback-rating-details-dto';
import { adaptApiQuestionAnswerDto } from './api-question-answer-dto.adapter';

export function adaptApiOrganizationFeedbackRatingDetailsDto(source?: OrganizationFeedbackRatingDetails | null): ApiOrganizationFeedbackRatingDetailsDto {
  return {
    IsDeleted: source?.isDeleted,
    QuestionsAnswers: (source?.questionsAnswers ?? []).map((item) => adaptApiQuestionAnswerDto(item)),
    Rating: source?.rating,
    SourceOrganizationId: source?.sourceOrganizationId,
    SourceOrganizationName: source?.sourceOrganizationName,
  };
}
