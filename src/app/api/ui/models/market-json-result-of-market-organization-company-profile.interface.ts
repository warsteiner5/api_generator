import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketOrganizationCompanyProfile } from './market-organization-company-profile.interface';

export type MarketJsonResultOfMarketOrganizationCompanyProfile = MarketJsonVoidResultAlt & { 'data'?: MarketOrganizationCompanyProfile | null; };
