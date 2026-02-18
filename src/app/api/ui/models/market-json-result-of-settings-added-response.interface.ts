import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SettingsAddedResponseAlt } from './settings-added-response-alt.interface';

export type MarketJsonResultOfSettingsAddedResponse = MarketJsonVoidResultAlt & { 'data'?: SettingsAddedResponseAlt | null; };
