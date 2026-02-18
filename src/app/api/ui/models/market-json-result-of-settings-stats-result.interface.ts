import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SettingsStatsResultAlt } from './settings-stats-result-alt.interface';

export type MarketJsonResultOfSettingsStatsResult = MarketJsonVoidResultAlt & { 'data'?: SettingsStatsResultAlt | null; };
