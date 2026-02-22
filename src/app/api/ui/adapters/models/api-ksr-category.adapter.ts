import { KsrCategoryAlt } from '../../models/ksr-category-alt.interface';
import { ApiKsrCategoryAltDto } from '../../../swagger/models/api-ksr-category';
import { apiKsrValueAltDtoAdapter } from './api-ksr-value.adapter';

export const apiKsrCategoryAltDtoAdapter = (source?: KsrCategoryAlt | null): ApiKsrCategoryAltDto => {
  return {
    CategoryName: source?.categoryName,
    Children: source?.children?.map((item) => apiKsrValueAltDtoAdapter(item)),
    Order: source?.order,
  };
}
