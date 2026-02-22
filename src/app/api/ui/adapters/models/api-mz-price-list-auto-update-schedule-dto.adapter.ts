import { MzPriceListAutoUpdateSchedule } from '../../models/mz-price-list-auto-update-schedule.interface';
import { ApiMzPriceListAutoUpdateScheduleDto } from '../../../swagger/models/api-mz-price-list-auto-update-schedule-dto';

export const apiMzPriceListAutoUpdateScheduleDtoAdapter = (source?: MzPriceListAutoUpdateSchedule | null): ApiMzPriceListAutoUpdateScheduleDto => {
  return (source ?? {}) as ApiMzPriceListAutoUpdateScheduleDto;
}
