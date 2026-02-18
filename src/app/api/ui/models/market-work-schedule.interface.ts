import { DayOfWeekAltEnum } from '../enums/day-of-week-alt.enum';

export interface MarketWorkSchedule {
  dayOfWeek: DayOfWeekAltEnum;
  from: string;
  isWorkDay: boolean;
  to: string;
}
