import { ApiMarketPaginationResultOfListOfMarketOrganizationShortInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-organization-short-info-dto';
import { MarketPaginationResultOfListOfMarketOrganizationShortInfo } from '../../models/market-pagination-result-of-list-of-market-organization-short-info.interface';
import { adaptMarketOrganizationShortInfoToUI } from './market-organization-short-info.adapter';

export function adaptMarketPaginationResultOfListOfMarketOrganizationShortInfoToUI(source?: ApiMarketPaginationResultOfListOfMarketOrganizationShortInfoDto | null): MarketPaginationResultOfListOfMarketOrganizationShortInfo {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptMarketOrganizationShortInfoToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
