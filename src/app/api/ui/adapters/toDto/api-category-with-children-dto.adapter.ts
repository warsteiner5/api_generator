import { CategoryWithChildren } from '../../models/category-with-children.interface';
import { ApiCategoryWithChildrenDto } from '../../../swagger/models/api-category-with-children-dto';

export function adaptApiCategoryWithChildrenDto(source?: CategoryWithChildren | null): ApiCategoryWithChildrenDto {
  return (source ?? {}) as ApiCategoryWithChildrenDto;
}
