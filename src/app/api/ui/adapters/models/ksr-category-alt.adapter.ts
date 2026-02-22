import { ApiKsrCategoryAltDto } from '../../../swagger/models/api-ksr-category';
import { KsrCategoryAlt } from '../../models/ksr-category-alt.interface';
import { ksrValueAltAdapter } from './ksr-value-alt.adapter';

export const ksrCategoryAltAdapter = (source?: ApiKsrCategoryAltDto | null): KsrCategoryAlt => {
  return {
    categoryName: source?.CategoryName,
    children: source?.Children?.map((item) => ksrValueAltAdapter(item)),
    order: source?.Order,
  };
}
