import { ApiCustomerFeedbackToParticipantDto } from '../../../swagger/models/api-customer-feedback-to-participant-dto';
import { CustomerFeedbackToParticipant } from '../../models/customer-feedback-to-participant.interface';
import { adaptRatingQuestionAnswerToUI } from './rating-question-answer.adapter';

export function adaptCustomerFeedbackToParticipantToUI(source?: ApiCustomerFeedbackToParticipantDto | null): CustomerFeedbackToParticipant {
  return {
    answers: (source?.Answers ?? []).map((item) => adaptRatingQuestionAnswerToUI(item)),
    targetParticipantOrgId: source?.TargetParticipantOrgId ?? 0,
  };
}
