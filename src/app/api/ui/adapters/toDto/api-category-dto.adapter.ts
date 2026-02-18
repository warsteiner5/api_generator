import { Category } from '../../models/category.interface';
import { ApiCategoryDto } from '../../../swagger/models/api-category-dto';

export function adaptApiCategoryDto(source?: Category | null): ApiCategoryDto {
  return {
    Code: source?.code,
    Description: source?.description,
    HasChild: source?.hasChild,
    ParentCode: source?.parentCode,
  };
}
