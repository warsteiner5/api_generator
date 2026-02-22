import { ApiFilterObjectAltDto } from '../../../swagger/models/api-filter-object';
import { FilterObjectAlt } from '../../models/filter-object-alt.interface';
import { dayOfWeekAltEnumAdapter } from '../enums/day-of-week-alt-enum.adapter';
import { dayPeriodEnumAdapter } from '../enums/day-period-enum.adapter';
import { fieldAdapter } from './field.adapter';
import { marketSearchActionEnumAdapter } from '../enums/market-search-action-enum.adapter';

export const filterObjectAltAdapter = (source?: ApiFilterObjectAltDto | null): FilterObjectAlt => {
  return {
    dayPeriod: source?.DayPeriod === null ? undefined : dayPeriodEnumAdapter(source?.DayPeriod),
    daysOfWeek: source?.DaysOfWeek?.map((item) => dayOfWeekAltEnumAdapter(item)),
    email: source?.Email,
    guid: source?.Guid,
    hosts: source?.Hosts,
    id: source?.Id,
    isSubscriptionActive: source?.IsSubscriptionActive,
    items: source?.Items?.map((item) => fieldAdapter(item)),
    marketSearchAction: source?.MarketSearchAction === null ? undefined : marketSearchActionEnumAdapter(source?.MarketSearchAction),
    name: source?.Name,
    tenantId: source?.TenantId,
    tenantName: source?.TenantName,
    userId: source?.UserId,
  };
}
