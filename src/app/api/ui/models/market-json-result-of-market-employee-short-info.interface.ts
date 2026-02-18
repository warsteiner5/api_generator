import { MarketEmployeeShortInfoAlt } from './market-employee-short-info-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfMarketEmployeeShortInfo = MarketJsonVoidResultAlt & { 'data'?: MarketEmployeeShortInfoAlt | null; };
