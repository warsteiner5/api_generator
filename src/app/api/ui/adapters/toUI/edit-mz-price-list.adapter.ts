import { ApiEditMzPriceListDto } from '../../../swagger/models/api-edit-mz-price-list-dto';
import { EditMzPriceList } from '../../models/edit-mz-price-list.interface';
import { adaptDeliveryRegionInfoToUI } from './delivery-region-info.adapter';
import { adaptPriceListStateEnumToUI } from './price-list-state-enum.adapter';

export function adaptEditMzPriceListToUI(source?: ApiEditMzPriceListDto | null): EditMzPriceList {
  return {
    autoUpdateScheduleState: source?.AutoUpdateScheduleState ?? 0,
    belongedToTenantId: source?.BelongedToTenantId ?? 0,
    company: source?.Company ?? '',
    createdUserId: source?.CreatedUserId ?? 0,
    cronExpr: source?.CronExpr ?? '',
    deliveryRegionInfos: (source?.DeliveryRegionInfos ?? []).map((item) => adaptDeliveryRegionInfoToUI(item)),
    expirationDateTime: source?.ExpirationDateTime ?? '',
    externalId: source?.ExternalId ?? '',
    id: source?.Id ?? 0,
    isAutoUpdated: source?.IsAutoUpdated ?? false,
    isExportProduct: source?.IsExportProduct ?? false,
    isHidden: source?.IsHidden ?? false,
    name: source?.Name ?? '',
    organizationId: source?.OrganizationId ?? 0,
    state: adaptPriceListStateEnumToUI(source?.State),
    url: source?.Url ?? '',
  };
}
