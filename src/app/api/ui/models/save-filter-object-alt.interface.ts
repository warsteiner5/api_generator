import { BaseFieldAlt } from './base-field-alt.interface';
import { DayOfWeekAltEnum } from '../enums/day-of-week-alt.enum';
import { DayPeriodEnum } from '../enums/day-period.enum';

export interface SaveFilterObjectAlt {
  dayPeriod: DayPeriodEnum;
  daysOfWeek: DayOfWeekAltEnum[];
  email: string;
  isSubscriptionActive: boolean;
  items: BaseFieldAlt[];
  name: string;
}
