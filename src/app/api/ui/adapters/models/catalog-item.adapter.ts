import { ApiCatalogItemDto } from '../../../swagger/models/api-catalog-item-dto';
import { CatalogItem } from '../../models/catalog-item.interface';

export const catalogItemAdapter = (source?: ApiCatalogItemDto | null): CatalogItem => {
  return {
    id: source?.Id,
    name: source?.Name,
    organizationId: source?.OrganizationId,
    transliterate: source?.Transliterate,
  };
}
