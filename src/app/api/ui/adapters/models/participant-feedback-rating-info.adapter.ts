import { ApiParticipantFeedbackRatingInfoDto } from '../../../swagger/models/api-participant-feedback-rating-info-dto';
import { ParticipantFeedbackRatingInfo } from '../../models/participant-feedback-rating-info.interface';

export const participantFeedbackRatingInfoAdapter = (source?: ApiParticipantFeedbackRatingInfoDto | null): ParticipantFeedbackRatingInfo => {
  return {
    canRate: source?.CanRate,
    feedbacksCount: source?.FeedbacksCount,
    id: source?.Id,
    organizationId: source?.OrganizationId,
    participantInn: source?.ParticipantInn,
    participantName: source?.ParticipantName,
    rating: source?.Rating,
    typeName: source?.TypeName,
  };
}
