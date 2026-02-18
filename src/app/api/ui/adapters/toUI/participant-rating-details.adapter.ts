import { ApiParticipantRatingDetailsDto } from '../../../swagger/models/api-participant-rating-details-dto';
import { ParticipantRatingDetails } from '../../models/participant-rating-details.interface';
import { adaptOrganizationFeedbackRatingDetailsToUI } from './organization-feedback-rating-details.adapter';

export function adaptParticipantRatingDetailsToUI(source?: ApiParticipantRatingDetailsDto | null): ParticipantRatingDetails {
  return {
    isAdmin: source?.IsAdmin ?? false,
    organizationRatings: (source?.OrganizationRatings ?? []).map((item) => adaptOrganizationFeedbackRatingDetailsToUI(item)),
    participantAddress: source?.ParticipantAddress ?? '',
    participantInn: source?.ParticipantInn ?? '',
    participantName: source?.ParticipantName ?? '',
    rating: source?.Rating ?? 0,
  };
}
