import { ApiFilterObjectAltDto } from '../../../swagger/models/api-filter-object';
import { FilterObjectAlt } from '../../models/filter-object-alt.interface';
import { adaptDayOfWeekAltEnumToUI } from './day-of-week-alt-enum.adapter';
import { adaptDayPeriodEnumToUI } from './day-period-enum.adapter';
import { adaptFieldToUI } from './field.adapter';
import { adaptMarketSearchActionEnumToUI } from './market-search-action-enum.adapter';

export function adaptFilterObjectAltToUI(source?: ApiFilterObjectAltDto | null): FilterObjectAlt {
  return {
    dayPeriod: adaptDayPeriodEnumToUI(source?.DayPeriod),
    daysOfWeek: (source?.DaysOfWeek ?? []).map((item) => adaptDayOfWeekAltEnumToUI(item)),
    email: source?.Email ?? '',
    guid: source?.Guid ?? '',
    hosts: source?.Hosts ?? [],
    id: source?.Id ?? 0,
    isSubscriptionActive: source?.IsSubscriptionActive ?? false,
    items: (source?.Items ?? []).map((item) => adaptFieldToUI(item)),
    marketSearchAction: adaptMarketSearchActionEnumToUI(source?.MarketSearchAction),
    name: source?.Name ?? '',
    tenantId: source?.TenantId ?? 0,
    tenantName: source?.TenantName ?? '',
    userId: source?.UserId ?? 0,
  };
}
