import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfOrganizationDocument } from './market-pagination-result-of-list-of-organization-document.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocument = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfOrganizationDocument | null; };
