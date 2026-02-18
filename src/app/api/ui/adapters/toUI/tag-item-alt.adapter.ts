import { ApiTagItemAltDto } from '../../../swagger/models/api-tag-item';
import { TagItemAlt } from '../../models/tag-item-alt.interface';

export function adaptTagItemAltToUI(source?: ApiTagItemAltDto | null): TagItemAlt {
  return {
    id: source?.Id ?? '',
    isActive: source?.IsActive ?? false,
    priceFrom: source?.PriceFrom ?? 0,
    priceTo: source?.PriceTo ?? 0,
    regions: source?.Regions ?? [],
    tag: source?.Tag ?? '',
  };
}
