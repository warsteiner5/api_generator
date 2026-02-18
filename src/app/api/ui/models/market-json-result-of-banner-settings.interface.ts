import { BannerSettings } from './banner-settings.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfBannerSettings = MarketJsonVoidResultAlt & { 'data'?: BannerSettings | null; };
