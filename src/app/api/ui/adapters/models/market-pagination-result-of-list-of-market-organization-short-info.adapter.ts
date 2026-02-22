import { ApiMarketPaginationResultOfListOfMarketOrganizationShortInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-organization-short-info-dto';
import { MarketPaginationResultOfListOfMarketOrganizationShortInfo } from '../../models/market-pagination-result-of-list-of-market-organization-short-info.interface';
import { marketOrganizationShortInfoAdapter } from './market-organization-short-info.adapter';

export const marketPaginationResultOfListOfMarketOrganizationShortInfoAdapter = (source?: ApiMarketPaginationResultOfListOfMarketOrganizationShortInfoDto | null): MarketPaginationResultOfListOfMarketOrganizationShortInfo => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => marketOrganizationShortInfoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
