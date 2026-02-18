import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TradeDto2 } from './trade-dto-2.interface';

export type MarketJsonResultOfTrade = MarketJsonVoidResultAlt & { 'data'?: TradeDto2 | null; };
