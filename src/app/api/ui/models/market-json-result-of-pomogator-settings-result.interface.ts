import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { PomogatorSettingsResultAlt } from './pomogator-settings-result-alt.interface';

export type MarketJsonResultOfPomogatorSettingsResult = MarketJsonVoidResultAlt & { 'data'?: PomogatorSettingsResultAlt | null; };
