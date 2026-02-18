import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { PaginationResultOfForeignOrganization } from './pagination-result-of-foreign-organization.interface';

export type MarketJsonResultOfPaginationResultOfForeignOrganization = MarketJsonVoidResultAlt & { 'data'?: PaginationResultOfForeignOrganization | null; };
