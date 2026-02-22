import { OrganizationFeedbackRatingDetails } from './organization-feedback-rating-details.interface';

// @ts-ignore
export interface ParticipantRatingDetails {
  isAdmin: boolean;
  organizationRatings: OrganizationFeedbackRatingDetails[];
  participantAddress: string;
  participantInn: string;
  participantName: string;
  rating: number;
}
