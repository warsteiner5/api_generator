import { ApiKsrCategoryAltDto } from '../../../swagger/models/api-ksr-category';
import { KsrCategoryAlt } from '../../models/ksr-category-alt.interface';
import { adaptKsrValueAltToUI } from './ksr-value-alt.adapter';

export function adaptKsrCategoryAltToUI(source?: ApiKsrCategoryAltDto | null): KsrCategoryAlt {
  return {
    categoryName: source?.CategoryName ?? '',
    children: (source?.Children ?? []).map((item) => adaptKsrValueAltToUI(item)),
    order: source?.Order ?? 0,
  };
}
