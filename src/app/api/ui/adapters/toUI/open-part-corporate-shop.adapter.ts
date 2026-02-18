import { ApiOpenPartCorporateShopDto } from '../../../swagger/models/api-open-part-corporate-shop-dto';
import { OpenPartCorporateShop } from '../../models/open-part-corporate-shop.interface';
import { adaptTenantFlowTypeAltEnumToUI } from './tenant-flow-type-alt-enum.adapter';

export function adaptOpenPartCorporateShopToUI(source?: ApiOpenPartCorporateShopDto | null): OpenPartCorporateShop {
  return {
    imageId: source?.ImageId ?? '',
    name: source?.Name ?? '',
    orderIndex: source?.OrderIndex ?? 0,
    tenantFlowType: adaptTenantFlowTypeAltEnumToUI(source?.TenantFlowType),
    tenantId: source?.TenantId ?? 0,
    url: source?.Url ?? '',
  };
}
