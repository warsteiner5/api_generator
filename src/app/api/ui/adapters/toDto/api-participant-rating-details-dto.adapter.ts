import { ParticipantRatingDetails } from '../../models/participant-rating-details.interface';
import { ApiParticipantRatingDetailsDto } from '../../../swagger/models/api-participant-rating-details-dto';
import { adaptApiOrganizationFeedbackRatingDetailsDto } from './api-organization-feedback-rating-details-dto.adapter';

export function adaptApiParticipantRatingDetailsDto(source?: ParticipantRatingDetails | null): ApiParticipantRatingDetailsDto {
  return {
    IsAdmin: source?.isAdmin,
    OrganizationRatings: (source?.organizationRatings ?? []).map((item) => adaptApiOrganizationFeedbackRatingDetailsDto(item)),
    ParticipantAddress: source?.participantAddress,
    ParticipantInn: source?.participantInn,
    ParticipantName: source?.participantName,
    Rating: source?.rating,
  };
}
