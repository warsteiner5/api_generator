import { OpenPartRegionalShop } from '../../models/open-part-regional-shop.interface';
import { ApiOpenPartRegionalShopDto } from '../../../swagger/models/api-open-part-regional-shop-dto';
import { apiDistrictNameEnumAdapter } from '../enums/api-district-name-enum.adapter';
import { apiTenantFlowTypeAltEnumAdapter } from '../enums/api-tenant-flow-type.adapter';

export const apiOpenPartRegionalShopDtoAdapter = (source?: OpenPartRegionalShop | null): ApiOpenPartRegionalShopDto => {
  return {
    DistrictId: source?.districtId === null ? undefined : apiDistrictNameEnumAdapter(source?.districtId),
    ImageId: source?.imageId,
    Name: source?.name,
    OrderIndex: source?.orderIndex,
    RegionCode: source?.regionCode,
    TenantFlowType: source?.tenantFlowType === null ? undefined : apiTenantFlowTypeAltEnumAdapter(source?.tenantFlowType),
    TenantId: source?.tenantId,
    Url: source?.url,
  };
}
