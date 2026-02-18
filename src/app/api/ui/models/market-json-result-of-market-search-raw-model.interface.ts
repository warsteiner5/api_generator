import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketSearchRawModelAlt } from './market-search-raw-model-alt.interface';

export type MarketJsonResultOfMarketSearchRawModel = MarketJsonVoidResultAlt & { 'data'?: MarketSearchRawModelAlt | null; };
