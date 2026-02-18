import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketTradeView } from './market-trade-view.interface';

export type MarketJsonResultOfMarketTradeView = MarketJsonVoidResultAlt & { 'data'?: MarketTradeView | null; };
