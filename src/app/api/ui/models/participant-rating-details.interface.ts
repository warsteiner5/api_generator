import { OrganizationFeedbackRatingDetails } from './organization-feedback-rating-details.interface';

export interface ParticipantRatingDetails {
  isAdmin: boolean;
  organizationRatings: OrganizationFeedbackRatingDetails[];
  participantAddress: string;
  participantInn: string;
  participantName: string;
  rating: number;
}
