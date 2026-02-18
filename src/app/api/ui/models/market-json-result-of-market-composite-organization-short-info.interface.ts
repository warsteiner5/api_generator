import { MarketCompositeOrganizationShortInfo } from './market-composite-organization-short-info.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfMarketCompositeOrganizationShortInfo = MarketJsonVoidResultAlt & { 'data'?: MarketCompositeOrganizationShortInfo | null; };
