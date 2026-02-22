import { DayOfWeekAltEnum } from '../enums/day-of-week-alt.enum';

// @ts-ignore
export interface MarketWorkSchedule {
  dayOfWeek: DayOfWeekAltEnum;
  from: string;
  isWorkDay: boolean;
  to: string;
}
