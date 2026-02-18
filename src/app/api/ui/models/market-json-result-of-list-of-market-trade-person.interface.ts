import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketTradePersonAlt } from './market-trade-person-alt.interface';

export type MarketJsonResultOfListOfMarketTradePerson = MarketJsonVoidResultAlt & { 'data'?: Array<MarketTradePersonAlt> | null; };
