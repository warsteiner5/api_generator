import { TagItemAlt } from '../../models/tag-item-alt.interface';
import { ApiTagItemAltDto } from '../../../swagger/models/api-tag-item';

export function adaptApiTagItemAltDto(source?: TagItemAlt | null): ApiTagItemAltDto {
  return {
    Id: source?.id,
    IsActive: source?.isActive,
    PriceFrom: source?.priceFrom,
    PriceTo: source?.priceTo,
    Regions: source?.regions ?? [],
    Tag: source?.tag,
  };
}
