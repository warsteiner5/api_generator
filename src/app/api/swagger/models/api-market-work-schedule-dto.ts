/* tslint:disable */
/* eslint-disable */
import { ApiDayOfWeekAltEnum } from '../models/api-day-of-week';
export interface ApiMarketWorkScheduleDto {
  DayOfWeek?: ApiDayOfWeekAltEnum;
  From?: string;
  IsWorkDay?: boolean;
  To?: string;
}
