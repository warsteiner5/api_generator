import { MarketPaginationResultOfListOfMarketOrganizationShortInfo } from '../../models/market-pagination-result-of-list-of-market-organization-short-info.interface';
import { ApiMarketPaginationResultOfListOfMarketOrganizationShortInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-organization-short-info-dto';
import { apiMarketOrganizationShortInfoDtoAdapter } from './api-market-organization-short-info-dto.adapter';

export const apiMarketPaginationResultOfListOfMarketOrganizationShortInfoDtoAdapter = (source?: MarketPaginationResultOfListOfMarketOrganizationShortInfo | null): ApiMarketPaginationResultOfListOfMarketOrganizationShortInfoDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiMarketOrganizationShortInfoDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
