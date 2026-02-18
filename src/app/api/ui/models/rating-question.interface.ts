import { RatingQuestionOption } from './rating-question-option.interface';

export interface RatingQuestion {
  id: number;
  isDeleted: boolean;
  options: RatingQuestionOption[];
  questionText: string;
  tenantId: number;
}
