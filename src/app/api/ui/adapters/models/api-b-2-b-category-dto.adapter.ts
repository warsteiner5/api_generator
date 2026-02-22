import { B2BCategory } from '../../models/b-2-b-category.interface';
import { ApiB2BCategoryDto } from '../../../swagger/models/api-b-2-b-category-dto';

export const apiB2BCategoryDtoAdapter = (source?: B2BCategory | null): ApiB2BCategoryDto => {
  return {
    Code: source?.code,
    Description: source?.description,
    ParentCode: source?.parentCode,
  };
}
