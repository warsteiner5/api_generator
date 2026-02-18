import { RatingQuestion } from './rating-question.interface';

export interface ParticipantRatingDetailsToLeaveFeedback {
  participantAddress: string;
  participantInn: string;
  participantName: string;
  questions: RatingQuestion[];
}
