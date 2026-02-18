import { DayOfWeekAltEnum } from '../enums/day-of-week-alt.enum';
import { DayPeriodEnum } from '../enums/day-period.enum';
import { Field } from './field.interface';
import { MarketSearchActionEnum } from '../enums/market-search-action.enum';

export interface FilterObjectAlt {
  dayPeriod: DayPeriodEnum;
  daysOfWeek: DayOfWeekAltEnum[];
  email: string;
  guid: string;
  hosts: string[];
  id: number;
  isSubscriptionActive: boolean;
  items: Field[];
  marketSearchAction: MarketSearchActionEnum;
  name: string;
  tenantId: number;
  tenantName: string;
  userId: number;
}
