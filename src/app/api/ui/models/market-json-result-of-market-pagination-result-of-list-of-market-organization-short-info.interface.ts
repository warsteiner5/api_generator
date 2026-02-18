import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfMarketOrganizationShortInfo } from './market-pagination-result-of-list-of-market-organization-short-info.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfo = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfMarketOrganizationShortInfo | null; };
