import { ApiMarketWorkScheduleDto } from '../../../swagger/models/api-market-work-schedule-dto';
import { MarketWorkSchedule } from '../../models/market-work-schedule.interface';
import { adaptDayOfWeekAltEnumToUI } from './day-of-week-alt-enum.adapter';

export function adaptMarketWorkScheduleToUI(source?: ApiMarketWorkScheduleDto | null): MarketWorkSchedule {
  return {
    dayOfWeek: adaptDayOfWeekAltEnumToUI(source?.DayOfWeek),
    from: source?.From ?? '',
    isWorkDay: source?.IsWorkDay ?? false,
    to: source?.To ?? '',
  };
}
