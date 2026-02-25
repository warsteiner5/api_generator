import { CategoryWithChildren } from '../../models/category-with-children.interface';
import { ApiCategoryWithChildrenDto } from '../../../swagger/models/api-category-with-children-dto';
import { apiCategoryDtoAdapter } from './api-category-dto.adapter';

export const apiCategoryWithChildrenDtoAdapter = (source?: CategoryWithChildren | null): ApiCategoryWithChildrenDto => {
  return {
    ...apiCategoryDtoAdapter(source as unknown as Parameters<typeof apiCategoryDtoAdapter>[0]),
    Children: source?.children?.map((item) => apiCategoryDtoAdapter(item)),
  };
}
