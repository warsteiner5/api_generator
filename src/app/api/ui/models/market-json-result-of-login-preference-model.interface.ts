import { LoginPreferenceModelAlt } from './login-preference-model-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfLoginPreferenceModel = MarketJsonVoidResultAlt & { 'data'?: LoginPreferenceModelAlt | null; };
