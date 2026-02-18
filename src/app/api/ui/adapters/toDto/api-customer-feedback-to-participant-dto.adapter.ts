import { CustomerFeedbackToParticipant } from '../../models/customer-feedback-to-participant.interface';
import { ApiCustomerFeedbackToParticipantDto } from '../../../swagger/models/api-customer-feedback-to-participant-dto';
import { adaptApiRatingQuestionAnswerDto } from './api-rating-question-answer-dto.adapter';

export function adaptApiCustomerFeedbackToParticipantDto(source?: CustomerFeedbackToParticipant | null): ApiCustomerFeedbackToParticipantDto {
  return {
    Answers: (source?.answers ?? []).map((item) => adaptApiRatingQuestionAnswerDto(item)),
    TargetParticipantOrgId: source?.targetParticipantOrgId,
  };
}
