import { SaveFilterObjectAlt } from '../../models/save-filter-object-alt.interface';
import { ApiSaveFilterObjectAltDto } from '../../../swagger/models/api-save-filter-object';
import { adaptApiBaseFieldAltDto } from './api-base-field.adapter';
import { adaptApiDayOfWeekAltEnum } from './api-day-of-week.adapter';
import { adaptApiDayPeriodEnum } from './api-day-period-enum.adapter';

export function adaptApiSaveFilterObjectAltDto(source?: SaveFilterObjectAlt | null): ApiSaveFilterObjectAltDto {
  return {
    DayPeriod: adaptApiDayPeriodEnum(source?.dayPeriod),
    DaysOfWeek: (source?.daysOfWeek ?? []).map((item) => adaptApiDayOfWeekAltEnum(item)),
    Email: source?.email,
    IsSubscriptionActive: source?.isSubscriptionActive,
    Items: (source?.items ?? []).map((item) => adaptApiBaseFieldAltDto(item)),
    Name: source?.name,
  };
}
