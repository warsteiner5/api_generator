import { ApiCatalogItemDto } from '../../../swagger/models/api-catalog-item-dto';
import { CatalogItem } from '../../models/catalog-item.interface';

export function adaptCatalogItemToUI(source?: ApiCatalogItemDto | null): CatalogItem {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    organizationId: source?.OrganizationId ?? 0,
    transliterate: source?.Transliterate ?? '',
  };
}
