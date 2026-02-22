import { ApiCategoryDto } from '../../../swagger/models/api-category-dto';
import { Category } from '../../models/category.interface';

export const categoryAdapter = (source?: ApiCategoryDto | null): Category => {
  return {
    code: source?.Code,
    description: source?.Description,
    hasChild: source?.HasChild,
    parentCode: source?.ParentCode,
  };
}
