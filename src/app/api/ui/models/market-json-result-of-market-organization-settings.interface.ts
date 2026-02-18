import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketOrganizationSettingsAlt } from './market-organization-settings-alt.interface';

export type MarketJsonResultOfMarketOrganizationSettings = MarketJsonVoidResultAlt & { 'data'?: MarketOrganizationSettingsAlt | null; };
