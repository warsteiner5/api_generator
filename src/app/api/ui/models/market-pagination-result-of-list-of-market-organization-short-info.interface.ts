import { MarketOrganizationShortInfo } from './market-organization-short-info.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfMarketOrganizationShortInfo {
  currentPage: number;
  items: MarketOrganizationShortInfo[];
  total: number;
  totalPages: number;
}
