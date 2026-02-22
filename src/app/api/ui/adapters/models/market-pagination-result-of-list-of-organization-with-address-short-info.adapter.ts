import { ApiMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-organization-with-address-short-info-dto';
import { MarketPaginationResultOfListOfOrganizationWithAddressShortInfo } from '../../models/market-pagination-result-of-list-of-organization-with-address-short-info.interface';
import { organizationWithAddressShortInfoAdapter } from './organization-with-address-short-info.adapter';

export const marketPaginationResultOfListOfOrganizationWithAddressShortInfoAdapter = (source?: ApiMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto | null): MarketPaginationResultOfListOfOrganizationWithAddressShortInfo => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => organizationWithAddressShortInfoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
