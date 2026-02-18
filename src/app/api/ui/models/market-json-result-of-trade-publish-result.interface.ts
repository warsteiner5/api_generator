import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TradePublishResultAlt } from './trade-publish-result-alt.interface';

export type MarketJsonResultOfTradePublishResult = MarketJsonVoidResultAlt & { 'data'?: TradePublishResultAlt | null; };
