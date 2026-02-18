import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TradePlanMarketShort } from './trade-plan-market-short.interface';

export type MarketJsonResultOfTradePlanMarketShort = MarketJsonVoidResultAlt & { 'data'?: TradePlanMarketShort | null; };
