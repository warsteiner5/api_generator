import { ApiMzPriceListAutoUpdateScheduleDto } from '../../../swagger/models/api-mz-price-list-auto-update-schedule-dto';
import { MzPriceListAutoUpdateSchedule } from '../../models/mz-price-list-auto-update-schedule.interface';

export const mzPriceListAutoUpdateScheduleAdapter = (source?: ApiMzPriceListAutoUpdateScheduleDto | null): MzPriceListAutoUpdateSchedule => {
  return (source ?? {}) as MzPriceListAutoUpdateSchedule;
}
