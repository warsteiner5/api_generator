import { SaveFilterObjectAlt } from '../../models/save-filter-object-alt.interface';
import { ApiSaveFilterObjectAltDto } from '../../../swagger/models/api-save-filter-object';
import { apiBaseFieldAltDtoAdapter } from './api-base-field.adapter';
import { apiDayOfWeekAltEnumAdapter } from '../enums/api-day-of-week.adapter';
import { apiDayPeriodEnumAdapter } from '../enums/api-day-period-enum.adapter';

export const apiSaveFilterObjectAltDtoAdapter = (source?: SaveFilterObjectAlt | null): ApiSaveFilterObjectAltDto => {
  return {
    DayPeriod: source?.dayPeriod === null ? undefined : apiDayPeriodEnumAdapter(source?.dayPeriod),
    DaysOfWeek: source?.daysOfWeek?.map((item) => apiDayOfWeekAltEnumAdapter(item)),
    Email: source?.email,
    IsSubscriptionActive: source?.isSubscriptionActive,
    Items: source?.items?.map((item) => apiBaseFieldAltDtoAdapter(item)),
    Name: source?.name,
  };
}
