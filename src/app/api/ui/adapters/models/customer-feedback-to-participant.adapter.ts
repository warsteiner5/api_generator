import { ApiCustomerFeedbackToParticipantDto } from '../../../swagger/models/api-customer-feedback-to-participant-dto';
import { CustomerFeedbackToParticipant } from '../../models/customer-feedback-to-participant.interface';
import { ratingQuestionAnswerAdapter } from './rating-question-answer.adapter';

export const customerFeedbackToParticipantAdapter = (source?: ApiCustomerFeedbackToParticipantDto | null): CustomerFeedbackToParticipant => {
  return {
    answers: source?.Answers?.map((item) => ratingQuestionAnswerAdapter(item)),
    targetParticipantOrgId: source?.TargetParticipantOrgId,
  };
}
