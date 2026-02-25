import { ApiCategoryWithChildrenDto } from '../../../swagger/models/api-category-with-children-dto';
import { CategoryWithChildren } from '../../models/category-with-children.interface';
import { categoryAdapter } from './category.adapter';

export const categoryWithChildrenAdapter = (source?: ApiCategoryWithChildrenDto | null): CategoryWithChildren => {
  return {
    ...categoryAdapter(source as unknown as Parameters<typeof categoryAdapter>[0]),
    children: source?.Children?.map((item) => categoryAdapter(item)),
  };
}
