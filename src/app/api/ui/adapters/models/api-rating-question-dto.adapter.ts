import { RatingQuestion } from '../../models/rating-question.interface';
import { ApiRatingQuestionDto } from '../../../swagger/models/api-rating-question-dto';
import { apiRatingQuestionOptionDtoAdapter } from './api-rating-question-option-dto.adapter';

export const apiRatingQuestionDtoAdapter = (source?: RatingQuestion | null): ApiRatingQuestionDto => {
  return {
    Id: source?.id,
    IsDeleted: source?.isDeleted,
    Options: source?.options?.map((item) => apiRatingQuestionOptionDtoAdapter(item)),
    QuestionText: source?.questionText,
    TenantId: source?.tenantId,
  };
}
