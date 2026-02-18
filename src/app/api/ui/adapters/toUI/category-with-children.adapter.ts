import { ApiCategoryWithChildrenDto } from '../../../swagger/models/api-category-with-children-dto';
import { CategoryWithChildren } from '../../models/category-with-children.interface';

export function adaptCategoryWithChildrenToUI(source?: ApiCategoryWithChildrenDto | null): CategoryWithChildren {
  return (source ?? {}) as CategoryWithChildren;
}
