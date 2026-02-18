import { ApiOrganizationFeedbackRatingDetailsDto } from '../../../swagger/models/api-organization-feedback-rating-details-dto';
import { OrganizationFeedbackRatingDetails } from '../../models/organization-feedback-rating-details.interface';
import { adaptQuestionAnswerToUI } from './question-answer.adapter';

export function adaptOrganizationFeedbackRatingDetailsToUI(source?: ApiOrganizationFeedbackRatingDetailsDto | null): OrganizationFeedbackRatingDetails {
  return {
    isDeleted: source?.IsDeleted ?? false,
    questionsAnswers: (source?.QuestionsAnswers ?? []).map((item) => adaptQuestionAnswerToUI(item)),
    rating: source?.Rating ?? 0,
    sourceOrganizationId: source?.SourceOrganizationId ?? 0,
    sourceOrganizationName: source?.SourceOrganizationName ?? '',
  };
}
