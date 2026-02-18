import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Organization } from './organization.interface';

export type MarketJsonResultOfOrganizationDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<Organization> | null; };
