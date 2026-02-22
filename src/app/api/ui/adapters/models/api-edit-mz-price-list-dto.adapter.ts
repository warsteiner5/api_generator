import { EditMzPriceList } from '../../models/edit-mz-price-list.interface';
import { ApiEditMzPriceListDto } from '../../../swagger/models/api-edit-mz-price-list-dto';
import { apiDeliveryRegionInfoDtoAdapter } from './api-delivery-region-info-dto.adapter';
import { apiPriceListStateEnumAdapter } from '../enums/api-price-list-state-enum.adapter';

export const apiEditMzPriceListDtoAdapter = (source?: EditMzPriceList | null): ApiEditMzPriceListDto => {
  return {
    AutoUpdateScheduleState: source?.autoUpdateScheduleState,
    BelongedToTenantId: source?.belongedToTenantId,
    Company: source?.company,
    CreatedUserId: source?.createdUserId,
    CronExpr: source?.cronExpr,
    DeliveryRegionInfos: source?.deliveryRegionInfos?.map((item) => apiDeliveryRegionInfoDtoAdapter(item)),
    ExpirationDateTime: source?.expirationDateTime,
    ExternalId: source?.externalId,
    Id: source?.id,
    IsAutoUpdated: source?.isAutoUpdated,
    IsExportProduct: source?.isExportProduct,
    IsHidden: source?.isHidden,
    Name: source?.name,
    OrganizationId: source?.organizationId,
    State: source?.state === null ? undefined : apiPriceListStateEnumAdapter(source?.state),
    Url: source?.url,
  };
}
