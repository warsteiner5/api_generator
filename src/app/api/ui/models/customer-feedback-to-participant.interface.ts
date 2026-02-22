import { RatingQuestionAnswer } from './rating-question-answer.interface';

// @ts-ignore
export interface CustomerFeedbackToParticipant {
  answers: RatingQuestionAnswer[];
  targetParticipantOrgId: number;
}
