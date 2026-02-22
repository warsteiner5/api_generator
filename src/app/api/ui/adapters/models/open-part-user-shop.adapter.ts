import { ApiOpenPartUserShopDto } from '../../../swagger/models/api-open-part-user-shop-dto';
import { OpenPartUserShop } from '../../models/open-part-user-shop.interface';
import { tenantFlowTypeAltEnumAdapter } from '../enums/tenant-flow-type-alt-enum.adapter';

export const openPartUserShopAdapter = (source?: ApiOpenPartUserShopDto | null): OpenPartUserShop => {
  return {
    imageId: source?.ImageId,
    imageSrc: source?.ImageSrc,
    isCorporate: source?.IsCorporate,
    isGlobalMarket: source?.IsGlobalMarket,
    name: source?.Name,
    orderIndex: source?.OrderIndex,
    tenantFlowType: source?.TenantFlowType === null ? undefined : tenantFlowTypeAltEnumAdapter(source?.TenantFlowType),
    tenantId: source?.TenantId,
    url: source?.Url,
  };
}
