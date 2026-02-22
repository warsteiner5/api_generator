import { ApiSaveFilterObjectAltDto } from '../../../swagger/models/api-save-filter-object';
import { SaveFilterObjectAlt } from '../../models/save-filter-object-alt.interface';
import { baseFieldAltAdapter } from './base-field-alt.adapter';
import { dayOfWeekAltEnumAdapter } from '../enums/day-of-week-alt-enum.adapter';
import { dayPeriodEnumAdapter } from '../enums/day-period-enum.adapter';

export const saveFilterObjectAltAdapter = (source?: ApiSaveFilterObjectAltDto | null): SaveFilterObjectAlt => {
  return {
    dayPeriod: source?.DayPeriod === null ? undefined : dayPeriodEnumAdapter(source?.DayPeriod),
    daysOfWeek: source?.DaysOfWeek?.map((item) => dayOfWeekAltEnumAdapter(item)),
    email: source?.Email,
    isSubscriptionActive: source?.IsSubscriptionActive,
    items: source?.Items?.map((item) => baseFieldAltAdapter(item)),
    name: source?.Name,
  };
}
