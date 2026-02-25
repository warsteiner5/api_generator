import { ApiMzPriceListDto } from '../../../swagger/models/api-mz-price-list-dto';
import { MzPriceList } from '../../models/mz-price-list.interface';
import { baseDtoWithCreateAndModificationDatesOfIntegerAdapter } from './base-dto-with-create-and-modification-dates-of-integer.adapter';
import { deliveryRegionInfoAdapter } from './delivery-region-info.adapter';
import { mzPriceListAutoUpdateScheduleAdapter } from './mz-price-list-auto-update-schedule.adapter';
import { participantOfferImportTaskAdapter } from './participant-offer-import-task.adapter';
import { priceListStateEnumAdapter } from '../enums/price-list-state-enum.adapter';
import { priceListTypeEnumAdapter } from '../enums/price-list-type-enum.adapter';

export const mzPriceListAdapter = (source?: ApiMzPriceListDto | null): MzPriceList => {
  return {
    ...baseDtoWithCreateAndModificationDatesOfIntegerAdapter(source as unknown as Parameters<typeof baseDtoWithCreateAndModificationDatesOfIntegerAdapter>[0]),
    externalId: source?.ExternalId,
    type: source?.Type === null ? undefined : priceListTypeEnumAdapter(source?.Type),
    name: source?.Name,
    company: source?.Company,
    url: source?.Url,
    participantOffersCount: source?.ParticipantOffersCount,
    lastImportTask: source?.LastImportTask === null ? undefined : participantOfferImportTaskAdapter(source?.LastImportTask),
    autoUpdateSchedule: source?.AutoUpdateSchedule === null ? undefined : mzPriceListAutoUpdateScheduleAdapter(source?.AutoUpdateSchedule),
    state: source?.State === null ? undefined : priceListStateEnumAdapter(source?.State),
    isHidden: source?.IsHidden,
    organizationId: source?.OrganizationId,
    belongedToTenantId: source?.BelongedToTenantId,
    createdUserId: source?.CreatedUserId,
    notificationEmail: source?.NotificationEmail,
    deliveryRegionInfos: source?.DeliveryRegionInfos?.map((item) => deliveryRegionInfoAdapter(item)),
    isDefault: source?.IsDefault,
    isRemoved: source?.IsRemoved,
    onModeration: source?.OnModeration,
    isExportProduct: source?.IsExportProduct,
  };
}
