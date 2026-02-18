import { MarketPaginationResultOfListOfOrganizationWithAddressShortInfo } from '../../models/market-pagination-result-of-list-of-organization-with-address-short-info.interface';
import { ApiMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-organization-with-address-short-info-dto';
import { adaptApiOrganizationWithAddressShortInfoDto } from './api-organization-with-address-short-info-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto(source?: MarketPaginationResultOfListOfOrganizationWithAddressShortInfo | null): ApiMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiOrganizationWithAddressShortInfoDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
