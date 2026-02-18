import { ApiSaveFilterObjectAltDto } from '../../../swagger/models/api-save-filter-object';
import { SaveFilterObjectAlt } from '../../models/save-filter-object-alt.interface';
import { adaptBaseFieldAltToUI } from './base-field-alt.adapter';
import { adaptDayOfWeekAltEnumToUI } from './day-of-week-alt-enum.adapter';
import { adaptDayPeriodEnumToUI } from './day-period-enum.adapter';

export function adaptSaveFilterObjectAltToUI(source?: ApiSaveFilterObjectAltDto | null): SaveFilterObjectAlt {
  return {
    dayPeriod: adaptDayPeriodEnumToUI(source?.DayPeriod),
    daysOfWeek: (source?.DaysOfWeek ?? []).map((item) => adaptDayOfWeekAltEnumToUI(item)),
    email: source?.Email ?? '',
    isSubscriptionActive: source?.IsSubscriptionActive ?? false,
    items: (source?.Items ?? []).map((item) => adaptBaseFieldAltToUI(item)),
    name: source?.Name ?? '',
  };
}
