import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TradePlan223Position } from './trade-plan-223-position.interface';

export type MarketJsonResultOfTradePlan223Position = MarketJsonVoidResultAlt & { 'data'?: TradePlan223Position | null; };
