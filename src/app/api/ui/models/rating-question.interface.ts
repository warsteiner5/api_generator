import { RatingQuestionOption } from './rating-question-option.interface';

// @ts-ignore
export interface RatingQuestion {
  id: number;
  isDeleted: boolean;
  options: RatingQuestionOption[];
  questionText: string;
  tenantId: number;
}
