import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketOrganizationCommonInfo } from './market-organization-common-info.interface';

export type MarketJsonResultOfMarketOrganizationCommonInfo = MarketJsonVoidResultAlt & { 'data'?: MarketOrganizationCommonInfo | null; };
