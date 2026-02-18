import { ParticipantRatingDetailsToLeaveFeedback } from '../../models/participant-rating-details-to-leave-feedback.interface';
import { ApiParticipantRatingDetailsToLeaveFeedbackDto } from '../../../swagger/models/api-participant-rating-details-to-leave-feedback-dto';
import { adaptApiRatingQuestionDto } from './api-rating-question-dto.adapter';

export function adaptApiParticipantRatingDetailsToLeaveFeedbackDto(source?: ParticipantRatingDetailsToLeaveFeedback | null): ApiParticipantRatingDetailsToLeaveFeedbackDto {
  return {
    ParticipantAddress: source?.participantAddress,
    ParticipantInn: source?.participantInn,
    ParticipantName: source?.participantName,
    Questions: (source?.questions ?? []).map((item) => adaptApiRatingQuestionDto(item)),
  };
}
