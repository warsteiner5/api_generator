import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketOrganizationFullInfo } from './market-organization-full-info.interface';

export type MarketJsonResultOfMarketOrganizationFullInfo = MarketJsonVoidResultAlt & { 'data'?: MarketOrganizationFullInfo | null; };
