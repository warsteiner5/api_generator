import { MarketWorkSchedule } from '../../models/market-work-schedule.interface';
import { ApiMarketWorkScheduleDto } from '../../../swagger/models/api-market-work-schedule-dto';
import { apiDayOfWeekAltEnumAdapter } from '../enums/api-day-of-week.adapter';

export const apiMarketWorkScheduleDtoAdapter = (source?: MarketWorkSchedule | null): ApiMarketWorkScheduleDto => {
  return {
    DayOfWeek: source?.dayOfWeek === null ? undefined : apiDayOfWeekAltEnumAdapter(source?.dayOfWeek),
    From: source?.from,
    IsWorkDay: source?.isWorkDay,
    To: source?.to,
  };
}
