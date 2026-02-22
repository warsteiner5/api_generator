import { FilterObjectAlt } from '../../models/filter-object-alt.interface';
import { ApiFilterObjectAltDto } from '../../../swagger/models/api-filter-object';
import { apiDayOfWeekAltEnumAdapter } from '../enums/api-day-of-week.adapter';
import { apiDayPeriodEnumAdapter } from '../enums/api-day-period-enum.adapter';
import { apiFieldDtoAdapter } from './api-field-dto.adapter';
import { apiMarketSearchActionEnumAdapter } from '../enums/api-market-search-action-enum.adapter';

export const apiFilterObjectAltDtoAdapter = (source?: FilterObjectAlt | null): ApiFilterObjectAltDto => {
  return {
    DayPeriod: source?.dayPeriod === null ? undefined : apiDayPeriodEnumAdapter(source?.dayPeriod),
    DaysOfWeek: source?.daysOfWeek?.map((item) => apiDayOfWeekAltEnumAdapter(item)),
    Email: source?.email,
    Guid: source?.guid,
    Hosts: source?.hosts,
    Id: source?.id,
    IsSubscriptionActive: source?.isSubscriptionActive,
    Items: source?.items?.map((item) => apiFieldDtoAdapter(item)),
    MarketSearchAction: source?.marketSearchAction === null ? undefined : apiMarketSearchActionEnumAdapter(source?.marketSearchAction),
    Name: source?.name,
    TenantId: source?.tenantId,
    TenantName: source?.tenantName,
    UserId: source?.userId,
  };
}
