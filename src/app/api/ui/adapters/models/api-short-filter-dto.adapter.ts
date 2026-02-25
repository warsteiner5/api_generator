import { ShortFilter } from '../../models/short-filter.interface';
import { ApiShortFilterDto } from '../../../swagger/models/api-short-filter-dto';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';

export const apiShortFilterDtoAdapter = (source?: ShortFilter | null): ApiShortFilterDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    Keyword: source?.keyword,
    PriceListId: source?.priceListId,
    States: source?.states,
    MinPrice: source?.minPrice,
    MaxPrice: source?.maxPrice,
    OkeiCode: source?.okeiCode,
    CountryCodes: source?.countryCodes,
    RegionCodes: source?.regionCodes,
    CategoryIds: source?.categoryIds,
    AvailableTenantIds: source?.availableTenantIds,
    Okpd2Codes: source?.okpd2Codes,
    WhiteList: source?.whiteList,
    BlackList: source?.blackList,
    OrganizationId: source?.organizationId,
    HasYmlData: source?.hasYmlData,
    RegionalProductSignEmpty: source?.regionalProductSignEmpty,
  };
}
