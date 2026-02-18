import { MarketWorkSchedule } from '../../models/market-work-schedule.interface';
import { ApiMarketWorkScheduleDto } from '../../../swagger/models/api-market-work-schedule-dto';
import { adaptApiDayOfWeekAltEnum } from './api-day-of-week.adapter';

export function adaptApiMarketWorkScheduleDto(source?: MarketWorkSchedule | null): ApiMarketWorkScheduleDto {
  return {
    DayOfWeek: adaptApiDayOfWeekAltEnum(source?.dayOfWeek),
    From: source?.from,
    IsWorkDay: source?.isWorkDay,
    To: source?.to,
  };
}
