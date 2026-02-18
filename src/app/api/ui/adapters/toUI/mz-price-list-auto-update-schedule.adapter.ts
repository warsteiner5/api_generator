import { ApiMzPriceListAutoUpdateScheduleDto } from '../../../swagger/models/api-mz-price-list-auto-update-schedule-dto';
import { MzPriceListAutoUpdateSchedule } from '../../models/mz-price-list-auto-update-schedule.interface';

export function adaptMzPriceListAutoUpdateScheduleToUI(source?: ApiMzPriceListAutoUpdateScheduleDto | null): MzPriceListAutoUpdateSchedule {
  return (source ?? {}) as MzPriceListAutoUpdateSchedule;
}
