import { FilterObjectAlt } from '../../models/filter-object-alt.interface';
import { ApiFilterObjectAltDto } from '../../../swagger/models/api-filter-object';
import { adaptApiDayOfWeekAltEnum } from './api-day-of-week.adapter';
import { adaptApiDayPeriodEnum } from './api-day-period-enum.adapter';
import { adaptApiFieldDto } from './api-field-dto.adapter';
import { adaptApiMarketSearchActionEnum } from './api-market-search-action-enum.adapter';

export function adaptApiFilterObjectAltDto(source?: FilterObjectAlt | null): ApiFilterObjectAltDto {
  return {
    DayPeriod: adaptApiDayPeriodEnum(source?.dayPeriod),
    DaysOfWeek: (source?.daysOfWeek ?? []).map((item) => adaptApiDayOfWeekAltEnum(item)),
    Email: source?.email,
    Guid: source?.guid,
    Hosts: source?.hosts ?? [],
    Id: source?.id,
    IsSubscriptionActive: source?.isSubscriptionActive,
    Items: (source?.items ?? []).map((item) => adaptApiFieldDto(item)),
    MarketSearchAction: adaptApiMarketSearchActionEnum(source?.marketSearchAction),
    Name: source?.name,
    TenantId: source?.tenantId,
    TenantName: source?.tenantName,
    UserId: source?.userId,
  };
}
