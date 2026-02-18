import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OrganizationProfileDocument } from './organization-profile-document.interface';

export type MarketJsonResultOfOrganizationProfileDocument = MarketJsonVoidResultAlt & { 'data'?: OrganizationProfileDocument | null; };
