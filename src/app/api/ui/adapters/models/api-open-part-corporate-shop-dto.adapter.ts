import { OpenPartCorporateShop } from '../../models/open-part-corporate-shop.interface';
import { ApiOpenPartCorporateShopDto } from '../../../swagger/models/api-open-part-corporate-shop-dto';
import { apiTenantFlowTypeAltEnumAdapter } from '../enums/api-tenant-flow-type.adapter';

export const apiOpenPartCorporateShopDtoAdapter = (source?: OpenPartCorporateShop | null): ApiOpenPartCorporateShopDto => {
  return {
    ImageId: source?.imageId,
    Name: source?.name,
    OrderIndex: source?.orderIndex,
    TenantFlowType: source?.tenantFlowType === null ? undefined : apiTenantFlowTypeAltEnumAdapter(source?.tenantFlowType),
    TenantId: source?.tenantId,
    Url: source?.url,
  };
}
