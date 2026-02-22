import { ApiEditMzPriceListDto } from '../../../swagger/models/api-edit-mz-price-list-dto';
import { EditMzPriceList } from '../../models/edit-mz-price-list.interface';
import { deliveryRegionInfoAdapter } from './delivery-region-info.adapter';
import { priceListStateEnumAdapter } from '../enums/price-list-state-enum.adapter';

export const editMzPriceListAdapter = (source?: ApiEditMzPriceListDto | null): EditMzPriceList => {
  return {
    autoUpdateScheduleState: source?.AutoUpdateScheduleState,
    belongedToTenantId: source?.BelongedToTenantId,
    company: source?.Company,
    createdUserId: source?.CreatedUserId,
    cronExpr: source?.CronExpr,
    deliveryRegionInfos: source?.DeliveryRegionInfos?.map((item) => deliveryRegionInfoAdapter(item)),
    expirationDateTime: source?.ExpirationDateTime,
    externalId: source?.ExternalId,
    id: source?.Id,
    isAutoUpdated: source?.IsAutoUpdated,
    isExportProduct: source?.IsExportProduct,
    isHidden: source?.IsHidden,
    name: source?.Name,
    organizationId: source?.OrganizationId,
    state: source?.State === null ? undefined : priceListStateEnumAdapter(source?.State),
    url: source?.Url,
  };
}
