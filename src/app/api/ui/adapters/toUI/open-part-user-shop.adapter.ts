import { ApiOpenPartUserShopDto } from '../../../swagger/models/api-open-part-user-shop-dto';
import { OpenPartUserShop } from '../../models/open-part-user-shop.interface';
import { adaptTenantFlowTypeAltEnumToUI } from './tenant-flow-type-alt-enum.adapter';

export function adaptOpenPartUserShopToUI(source?: ApiOpenPartUserShopDto | null): OpenPartUserShop {
  return {
    imageId: source?.ImageId ?? '',
    imageSrc: source?.ImageSrc ?? '',
    isCorporate: source?.IsCorporate ?? false,
    isGlobalMarket: source?.IsGlobalMarket ?? false,
    name: source?.Name ?? '',
    orderIndex: source?.OrderIndex ?? 0,
    tenantFlowType: adaptTenantFlowTypeAltEnumToUI(source?.TenantFlowType),
    tenantId: source?.TenantId ?? 0,
    url: source?.Url ?? '',
  };
}
