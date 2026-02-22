import { ApiOpenPartRegionalShopDto } from '../../../swagger/models/api-open-part-regional-shop-dto';
import { OpenPartRegionalShop } from '../../models/open-part-regional-shop.interface';
import { districtNameEnumAdapter } from '../enums/district-name-enum.adapter';
import { tenantFlowTypeAltEnumAdapter } from '../enums/tenant-flow-type-alt-enum.adapter';

export const openPartRegionalShopAdapter = (source?: ApiOpenPartRegionalShopDto | null): OpenPartRegionalShop => {
  return {
    districtId: source?.DistrictId === null ? undefined : districtNameEnumAdapter(source?.DistrictId),
    imageId: source?.ImageId,
    name: source?.Name,
    orderIndex: source?.OrderIndex,
    regionCode: source?.RegionCode,
    tenantFlowType: source?.TenantFlowType === null ? undefined : tenantFlowTypeAltEnumAdapter(source?.TenantFlowType),
    tenantId: source?.TenantId,
    url: source?.Url,
  };
}
