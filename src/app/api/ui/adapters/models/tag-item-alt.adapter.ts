import { ApiTagItemAltDto } from '../../../swagger/models/api-tag-item';
import { TagItemAlt } from '../../models/tag-item-alt.interface';

export const tagItemAltAdapter = (source?: ApiTagItemAltDto | null): TagItemAlt => {
  return {
    id: source?.Id,
    isActive: source?.IsActive,
    priceFrom: source?.PriceFrom,
    priceTo: source?.PriceTo,
    regions: source?.Regions,
    tag: source?.Tag,
  };
}
