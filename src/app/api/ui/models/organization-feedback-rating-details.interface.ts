import { QuestionAnswer } from './question-answer.interface';

// @ts-ignore
export interface OrganizationFeedbackRatingDetails {
  isDeleted: boolean;
  questionsAnswers: QuestionAnswer[];
  rating: number;
  sourceOrganizationId: number;
  sourceOrganizationName: string;
}
