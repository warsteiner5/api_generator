import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPartnerOrganization } from './market-partner-organization.interface';

export type MarketJsonResultOfListOfMarketPartnerOrganization = MarketJsonVoidResultAlt & { 'data'?: Array<MarketPartnerOrganization> | null; };
