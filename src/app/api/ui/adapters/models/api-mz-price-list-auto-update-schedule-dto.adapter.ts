import { MzPriceListAutoUpdateSchedule } from '../../models/mz-price-list-auto-update-schedule.interface';
import { ApiMzPriceListAutoUpdateScheduleDto } from '../../../swagger/models/api-mz-price-list-auto-update-schedule-dto';
import { apiBaseDtoWithCreateAndModificationDatesOfIntegerAdapter } from './api-base-dto-with-create-and-modification-dates-of-integer.adapter';

export const apiMzPriceListAutoUpdateScheduleDtoAdapter = (source?: MzPriceListAutoUpdateSchedule | null): ApiMzPriceListAutoUpdateScheduleDto => {
  return {
    ...apiBaseDtoWithCreateAndModificationDatesOfIntegerAdapter(source as unknown as Parameters<typeof apiBaseDtoWithCreateAndModificationDatesOfIntegerAdapter>[0]),
    PriceListId: source?.priceListId,
    CronExpr: source?.cronExpr,
    NextUpdateStart: source?.nextUpdateStart,
    AutoUpdateScheduleState: source?.autoUpdateScheduleState,
    ExpirationDate: source?.expirationDate,
    FailAttemptsCount: source?.failAttemptsCount,
  };
}
