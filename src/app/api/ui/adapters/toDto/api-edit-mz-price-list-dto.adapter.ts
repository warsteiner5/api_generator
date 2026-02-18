import { EditMzPriceList } from '../../models/edit-mz-price-list.interface';
import { ApiEditMzPriceListDto } from '../../../swagger/models/api-edit-mz-price-list-dto';
import { adaptApiDeliveryRegionInfoDto } from './api-delivery-region-info-dto.adapter';
import { adaptApiPriceListStateEnum } from './api-price-list-state-enum.adapter';

export function adaptApiEditMzPriceListDto(source?: EditMzPriceList | null): ApiEditMzPriceListDto {
  return {
    AutoUpdateScheduleState: source?.autoUpdateScheduleState,
    BelongedToTenantId: source?.belongedToTenantId,
    Company: source?.company,
    CreatedUserId: source?.createdUserId,
    CronExpr: source?.cronExpr,
    DeliveryRegionInfos: (source?.deliveryRegionInfos ?? []).map((item) => adaptApiDeliveryRegionInfoDto(item)),
    ExpirationDateTime: source?.expirationDateTime,
    ExternalId: source?.externalId,
    Id: source?.id,
    IsAutoUpdated: source?.isAutoUpdated,
    IsExportProduct: source?.isExportProduct,
    IsHidden: source?.isHidden,
    Name: source?.name,
    OrganizationId: source?.organizationId,
    State: adaptApiPriceListStateEnum(source?.state),
    Url: source?.url,
  };
}
