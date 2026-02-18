import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OrganizationInfo } from './organization-info.interface';

export type MarketJsonResultOfOrganizationInfo = MarketJsonVoidResultAlt & { 'data'?: OrganizationInfo | null; };
