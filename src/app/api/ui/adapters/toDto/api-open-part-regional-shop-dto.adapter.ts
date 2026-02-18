import { OpenPartRegionalShop } from '../../models/open-part-regional-shop.interface';
import { ApiOpenPartRegionalShopDto } from '../../../swagger/models/api-open-part-regional-shop-dto';
import { adaptApiDistrictNameEnum } from './api-district-name-enum.adapter';
import { adaptApiTenantFlowTypeAltEnum } from './api-tenant-flow-type.adapter';

export function adaptApiOpenPartRegionalShopDto(source?: OpenPartRegionalShop | null): ApiOpenPartRegionalShopDto {
  return {
    DistrictId: adaptApiDistrictNameEnum(source?.districtId),
    ImageId: source?.imageId,
    Name: source?.name,
    OrderIndex: source?.orderIndex,
    RegionCode: source?.regionCode,
    TenantFlowType: adaptApiTenantFlowTypeAltEnum(source?.tenantFlowType),
    TenantId: source?.tenantId,
    Url: source?.url,
  };
}
