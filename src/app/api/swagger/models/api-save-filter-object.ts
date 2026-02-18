/* tslint:disable */
/* eslint-disable */
import { ApiBaseFieldAltDto } from '../models/api-base-field';
import { ApiDayOfWeekAltEnum } from '../models/api-day-of-week';
import { ApiDayPeriodEnum } from '../models/api-day-period-enum';
export interface ApiSaveFilterObjectAltDto {
  DayPeriod?: ApiDayPeriodEnum;
  DaysOfWeek?: Array<ApiDayOfWeekAltEnum> | null;
  Email?: string | null;
  IsSubscriptionActive?: boolean;
  Items?: Array<ApiBaseFieldAltDto> | null;
  Name?: string | null;
}
