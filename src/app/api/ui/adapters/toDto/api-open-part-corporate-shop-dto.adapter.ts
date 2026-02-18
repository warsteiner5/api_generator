import { OpenPartCorporateShop } from '../../models/open-part-corporate-shop.interface';
import { ApiOpenPartCorporateShopDto } from '../../../swagger/models/api-open-part-corporate-shop-dto';
import { adaptApiTenantFlowTypeAltEnum } from './api-tenant-flow-type.adapter';

export function adaptApiOpenPartCorporateShopDto(source?: OpenPartCorporateShop | null): ApiOpenPartCorporateShopDto {
  return {
    ImageId: source?.imageId,
    Name: source?.name,
    OrderIndex: source?.orderIndex,
    TenantFlowType: adaptApiTenantFlowTypeAltEnum(source?.tenantFlowType),
    TenantId: source?.tenantId,
    Url: source?.url,
  };
}
