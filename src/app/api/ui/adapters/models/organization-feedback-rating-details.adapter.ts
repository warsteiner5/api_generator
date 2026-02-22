import { ApiOrganizationFeedbackRatingDetailsDto } from '../../../swagger/models/api-organization-feedback-rating-details-dto';
import { OrganizationFeedbackRatingDetails } from '../../models/organization-feedback-rating-details.interface';
import { questionAnswerAdapter } from './question-answer.adapter';

export const organizationFeedbackRatingDetailsAdapter = (source?: ApiOrganizationFeedbackRatingDetailsDto | null): OrganizationFeedbackRatingDetails => {
  return {
    isDeleted: source?.IsDeleted,
    questionsAnswers: source?.QuestionsAnswers?.map((item) => questionAnswerAdapter(item)),
    rating: source?.Rating,
    sourceOrganizationId: source?.SourceOrganizationId,
    sourceOrganizationName: source?.SourceOrganizationName,
  };
}
