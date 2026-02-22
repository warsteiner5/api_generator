import { MarketPaginationResultOfListOfOrganizationWithAddressShortInfo } from '../../models/market-pagination-result-of-list-of-organization-with-address-short-info.interface';
import { ApiMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-organization-with-address-short-info-dto';
import { apiOrganizationWithAddressShortInfoDtoAdapter } from './api-organization-with-address-short-info-dto.adapter';

export const apiMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDtoAdapter = (source?: MarketPaginationResultOfListOfOrganizationWithAddressShortInfo | null): ApiMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiOrganizationWithAddressShortInfoDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
