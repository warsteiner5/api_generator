import { RatingQuestionAnswer } from './rating-question-answer.interface';

export interface CustomerFeedbackToParticipant {
  answers: RatingQuestionAnswer[];
  targetParticipantOrgId: number;
}
