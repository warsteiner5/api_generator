import { CustomerFeedbackToParticipant } from '../../models/customer-feedback-to-participant.interface';
import { ApiCustomerFeedbackToParticipantDto } from '../../../swagger/models/api-customer-feedback-to-participant-dto';
import { apiRatingQuestionAnswerDtoAdapter } from './api-rating-question-answer-dto.adapter';

export const apiCustomerFeedbackToParticipantDtoAdapter = (source?: CustomerFeedbackToParticipant | null): ApiCustomerFeedbackToParticipantDto => {
  return {
    Answers: source?.answers?.map((item) => apiRatingQuestionAnswerDtoAdapter(item)),
    TargetParticipantOrgId: source?.targetParticipantOrgId,
  };
}
