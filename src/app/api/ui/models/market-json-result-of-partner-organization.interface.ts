import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { PartnerOrganization } from './partner-organization.interface';

export type MarketJsonResultOfPartnerOrganization = MarketJsonVoidResultAlt & { 'data'?: PartnerOrganization | null; };
