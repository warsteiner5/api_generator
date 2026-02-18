import { KsrCategoryAlt } from '../../models/ksr-category-alt.interface';
import { ApiKsrCategoryAltDto } from '../../../swagger/models/api-ksr-category';
import { adaptApiKsrValueAltDto } from './api-ksr-value.adapter';

export function adaptApiKsrCategoryAltDto(source?: KsrCategoryAlt | null): ApiKsrCategoryAltDto {
  return {
    CategoryName: source?.categoryName,
    Children: (source?.children ?? []).map((item) => adaptApiKsrValueAltDto(item)),
    Order: source?.order,
  };
}
