import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketOrganizationFullInfo } from './market-organization-full-info.interface';

export type MarketJsonResultOfListOfMarketOrganizationFullInfo = MarketJsonVoidResultAlt & { 'data'?: Array<MarketOrganizationFullInfo> | null; };
