import { ApiMarketWorkScheduleDto } from '../../../swagger/models/api-market-work-schedule-dto';
import { MarketWorkSchedule } from '../../models/market-work-schedule.interface';
import { dayOfWeekAltEnumAdapter } from '../enums/day-of-week-alt-enum.adapter';

export const marketWorkScheduleAdapter = (source?: ApiMarketWorkScheduleDto | null): MarketWorkSchedule => {
  return {
    dayOfWeek: source?.DayOfWeek === null ? undefined : dayOfWeekAltEnumAdapter(source?.DayOfWeek),
    from: source?.From,
    isWorkDay: source?.IsWorkDay,
    to: source?.To,
  };
}
