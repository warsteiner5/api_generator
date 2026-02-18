import { ForeignOrganization } from './foreign-organization.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIReadOnlyCollectionOfForeignOrganization = MarketJsonVoidResultAlt & { 'data'?: Array<ForeignOrganization> | null; };
