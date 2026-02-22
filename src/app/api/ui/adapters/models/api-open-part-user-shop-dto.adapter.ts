import { OpenPartUserShop } from '../../models/open-part-user-shop.interface';
import { ApiOpenPartUserShopDto } from '../../../swagger/models/api-open-part-user-shop-dto';
import { apiTenantFlowTypeAltEnumAdapter } from '../enums/api-tenant-flow-type.adapter';

export const apiOpenPartUserShopDtoAdapter = (source?: OpenPartUserShop | null): ApiOpenPartUserShopDto => {
  return {
    ImageId: source?.imageId,
    ImageSrc: source?.imageSrc,
    IsCorporate: source?.isCorporate,
    IsGlobalMarket: source?.isGlobalMarket,
    Name: source?.name,
    OrderIndex: source?.orderIndex,
    TenantFlowType: source?.tenantFlowType === null ? undefined : apiTenantFlowTypeAltEnumAdapter(source?.tenantFlowType),
    TenantId: source?.tenantId,
    Url: source?.url,
  };
}
