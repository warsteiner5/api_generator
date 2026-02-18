import { ParticipantFeedbackRatingInfo } from '../../models/participant-feedback-rating-info.interface';
import { ApiParticipantFeedbackRatingInfoDto } from '../../../swagger/models/api-participant-feedback-rating-info-dto';

export function adaptApiParticipantFeedbackRatingInfoDto(source?: ParticipantFeedbackRatingInfo | null): ApiParticipantFeedbackRatingInfoDto {
  return {
    CanRate: source?.canRate,
    FeedbacksCount: source?.feedbacksCount,
    Id: source?.id,
    OrganizationId: source?.organizationId,
    ParticipantInn: source?.participantInn,
    ParticipantName: source?.participantName,
    Rating: source?.rating,
    TypeName: source?.typeName,
  };
}
