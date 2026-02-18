import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SingleSupplierTradeView } from './single-supplier-trade-view.interface';

export type MarketJsonResultOfSingleSupplierTradeView = MarketJsonVoidResultAlt & { 'data'?: SingleSupplierTradeView | null; };
