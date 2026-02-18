import { RatingQuestion } from '../../models/rating-question.interface';
import { ApiRatingQuestionDto } from '../../../swagger/models/api-rating-question-dto';
import { adaptApiRatingQuestionOptionDto } from './api-rating-question-option-dto.adapter';

export function adaptApiRatingQuestionDto(source?: RatingQuestion | null): ApiRatingQuestionDto {
  return {
    Id: source?.id,
    IsDeleted: source?.isDeleted,
    Options: (source?.options ?? []).map((item) => adaptApiRatingQuestionOptionDto(item)),
    QuestionText: source?.questionText,
    TenantId: source?.tenantId,
  };
}
