import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketUserProfile } from './market-user-profile.interface';

export type MarketJsonResultOfMarketUserProfile = MarketJsonVoidResultAlt & { 'data'?: MarketUserProfile | null; };
