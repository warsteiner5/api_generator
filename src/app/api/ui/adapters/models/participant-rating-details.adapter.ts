import { ApiParticipantRatingDetailsDto } from '../../../swagger/models/api-participant-rating-details-dto';
import { ParticipantRatingDetails } from '../../models/participant-rating-details.interface';
import { organizationFeedbackRatingDetailsAdapter } from './organization-feedback-rating-details.adapter';

export const participantRatingDetailsAdapter = (source?: ApiParticipantRatingDetailsDto | null): ParticipantRatingDetails => {
  return {
    isAdmin: source?.IsAdmin,
    organizationRatings: source?.OrganizationRatings?.map((item) => organizationFeedbackRatingDetailsAdapter(item)),
    participantAddress: source?.ParticipantAddress,
    participantInn: source?.ParticipantInn,
    participantName: source?.ParticipantName,
    rating: source?.Rating,
  };
}
