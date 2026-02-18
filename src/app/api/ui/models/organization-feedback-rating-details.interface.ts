import { QuestionAnswer } from './question-answer.interface';

export interface OrganizationFeedbackRatingDetails {
  isDeleted: boolean;
  questionsAnswers: QuestionAnswer[];
  rating: number;
  sourceOrganizationId: number;
  sourceOrganizationName: string;
}
