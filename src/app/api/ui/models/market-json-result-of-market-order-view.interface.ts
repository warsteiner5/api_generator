import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketOrderView } from './market-order-view.interface';

export type MarketJsonResultOfMarketOrderView = MarketJsonVoidResultAlt & { 'data'?: MarketOrderView | null; };
