/* tslint:disable */
/* eslint-disable */
import { ApiDayOfWeekAltEnum } from '../models/api-day-of-week';
import { ApiDayPeriodEnum } from '../models/api-day-period-enum';
import { ApiFieldDto } from '../models/api-field-dto';
import { ApiMarketSearchActionEnum } from '../models/api-market-search-action-enum';
export interface ApiFilterObjectAltDto {
  DayPeriod?: ApiDayPeriodEnum;
  DaysOfWeek?: Array<ApiDayOfWeekAltEnum> | null;
  Email?: string | null;
  Guid?: string;
  Hosts?: Array<string> | null;
  Id?: number;
  IsSubscriptionActive?: boolean;
  Items?: Array<ApiFieldDto> | null;
  MarketSearchAction?: ApiMarketSearchActionEnum;
  Name?: string | null;
  TenantId?: number;
  TenantName?: string | null;
  UserId?: number;
}
