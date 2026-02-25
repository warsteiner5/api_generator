import { MzPriceList } from '../../models/mz-price-list.interface';
import { ApiMzPriceListDto } from '../../../swagger/models/api-mz-price-list-dto';
import { apiBaseDtoWithCreateAndModificationDatesOfIntegerAdapter } from './api-base-dto-with-create-and-modification-dates-of-integer.adapter';
import { apiDeliveryRegionInfoDtoAdapter } from './api-delivery-region-info-dto.adapter';
import { apiMzPriceListAutoUpdateScheduleDtoAdapter } from './api-mz-price-list-auto-update-schedule-dto.adapter';
import { apiParticipantOfferImportTaskDtoAdapter } from './api-participant-offer-import-task-dto.adapter';
import { apiPriceListStateEnumAdapter } from '../enums/api-price-list-state-enum.adapter';
import { apiPriceListTypeEnumAdapter } from '../enums/api-price-list-type-enum.adapter';

export const apiMzPriceListDtoAdapter = (source?: MzPriceList | null): ApiMzPriceListDto => {
  return {
    ...apiBaseDtoWithCreateAndModificationDatesOfIntegerAdapter(source as unknown as Parameters<typeof apiBaseDtoWithCreateAndModificationDatesOfIntegerAdapter>[0]),
    ExternalId: source?.externalId,
    Type: source?.type === null ? undefined : apiPriceListTypeEnumAdapter(source?.type),
    Name: source?.name,
    Company: source?.company,
    Url: source?.url,
    ParticipantOffersCount: source?.participantOffersCount,
    LastImportTask: source?.lastImportTask === null ? undefined : apiParticipantOfferImportTaskDtoAdapter(source?.lastImportTask),
    AutoUpdateSchedule: source?.autoUpdateSchedule === null ? undefined : apiMzPriceListAutoUpdateScheduleDtoAdapter(source?.autoUpdateSchedule),
    State: source?.state === null ? undefined : apiPriceListStateEnumAdapter(source?.state),
    IsHidden: source?.isHidden,
    OrganizationId: source?.organizationId,
    BelongedToTenantId: source?.belongedToTenantId,
    CreatedUserId: source?.createdUserId,
    NotificationEmail: source?.notificationEmail,
    DeliveryRegionInfos: source?.deliveryRegionInfos?.map((item) => apiDeliveryRegionInfoDtoAdapter(item)),
    IsDefault: source?.isDefault,
    IsRemoved: source?.isRemoved,
    OnModeration: source?.onModeration,
    IsExportProduct: source?.isExportProduct,
  };
}
