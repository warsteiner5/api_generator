import { RatingQuestion } from './rating-question.interface';

// @ts-ignore
export interface ParticipantRatingDetailsToLeaveFeedback {
  participantAddress: string;
  participantInn: string;
  participantName: string;
  questions: RatingQuestion[];
}
