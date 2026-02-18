import { ApiMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-organization-with-address-short-info-dto';
import { MarketPaginationResultOfListOfOrganizationWithAddressShortInfo } from '../../models/market-pagination-result-of-list-of-organization-with-address-short-info.interface';
import { adaptOrganizationWithAddressShortInfoToUI } from './organization-with-address-short-info.adapter';

export function adaptMarketPaginationResultOfListOfOrganizationWithAddressShortInfoToUI(source?: ApiMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto | null): MarketPaginationResultOfListOfOrganizationWithAddressShortInfo {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptOrganizationWithAddressShortInfoToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
