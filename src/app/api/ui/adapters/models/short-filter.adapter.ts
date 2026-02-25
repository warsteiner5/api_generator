import { ApiShortFilterDto } from '../../../swagger/models/api-short-filter-dto';
import { ShortFilter } from '../../models/short-filter.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';

export const shortFilterAdapter = (source?: ApiShortFilterDto | null): ShortFilter => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    keyword: source?.Keyword,
    priceListId: source?.PriceListId,
    states: source?.States,
    minPrice: source?.MinPrice,
    maxPrice: source?.MaxPrice,
    okeiCode: source?.OkeiCode,
    countryCodes: source?.CountryCodes,
    regionCodes: source?.RegionCodes,
    categoryIds: source?.CategoryIds,
    availableTenantIds: source?.AvailableTenantIds,
    okpd2Codes: source?.Okpd2Codes,
    whiteList: source?.WhiteList,
    blackList: source?.BlackList,
    organizationId: source?.OrganizationId,
    hasYmlData: source?.HasYmlData,
    regionalProductSignEmpty: source?.RegionalProductSignEmpty,
  };
}
