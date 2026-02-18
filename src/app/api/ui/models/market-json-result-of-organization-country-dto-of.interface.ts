import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OrganizationCountry } from './organization-country.interface';

export type MarketJsonResultOfOrganizationCountryDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<OrganizationCountry> | null; };
