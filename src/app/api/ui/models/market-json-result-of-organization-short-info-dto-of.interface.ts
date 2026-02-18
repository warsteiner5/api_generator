import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OrganizationShortInfo } from './organization-short-info.interface';

export type MarketJsonResultOfOrganizationShortInfoDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<OrganizationShortInfo> | null; };
