import { ApiMzPriceListAutoUpdateScheduleDto } from '../../../swagger/models/api-mz-price-list-auto-update-schedule-dto';
import { MzPriceListAutoUpdateSchedule } from '../../models/mz-price-list-auto-update-schedule.interface';
import { baseDtoWithCreateAndModificationDatesOfIntegerAdapter } from './base-dto-with-create-and-modification-dates-of-integer.adapter';

export const mzPriceListAutoUpdateScheduleAdapter = (source?: ApiMzPriceListAutoUpdateScheduleDto | null): MzPriceListAutoUpdateSchedule => {
  return {
    ...baseDtoWithCreateAndModificationDatesOfIntegerAdapter(source as unknown as Parameters<typeof baseDtoWithCreateAndModificationDatesOfIntegerAdapter>[0]),
    priceListId: source?.PriceListId,
    cronExpr: source?.CronExpr,
    nextUpdateStart: source?.NextUpdateStart,
    autoUpdateScheduleState: source?.AutoUpdateScheduleState,
    expirationDate: source?.ExpirationDate,
    failAttemptsCount: source?.FailAttemptsCount,
  };
}
