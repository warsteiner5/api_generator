import { CatalogItem } from '../../models/catalog-item.interface';
import { ApiCatalogItemDto } from '../../../swagger/models/api-catalog-item-dto';

export const apiCatalogItemDtoAdapter = (source?: CatalogItem | null): ApiCatalogItemDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    OrganizationId: source?.organizationId,
    Transliterate: source?.transliterate,
  };
}
