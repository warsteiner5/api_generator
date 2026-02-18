import { ApiOpenPartRegionalShopDto } from '../../../swagger/models/api-open-part-regional-shop-dto';
import { OpenPartRegionalShop } from '../../models/open-part-regional-shop.interface';
import { adaptDistrictNameEnumToUI } from './district-name-enum.adapter';
import { adaptTenantFlowTypeAltEnumToUI } from './tenant-flow-type-alt-enum.adapter';

export function adaptOpenPartRegionalShopToUI(source?: ApiOpenPartRegionalShopDto | null): OpenPartRegionalShop {
  return {
    districtId: adaptDistrictNameEnumToUI(source?.DistrictId),
    imageId: source?.ImageId ?? '',
    name: source?.Name ?? '',
    orderIndex: source?.OrderIndex ?? 0,
    regionCode: source?.RegionCode ?? 0,
    tenantFlowType: adaptTenantFlowTypeAltEnumToUI(source?.TenantFlowType),
    tenantId: source?.TenantId ?? 0,
    url: source?.Url ?? '',
  };
}
