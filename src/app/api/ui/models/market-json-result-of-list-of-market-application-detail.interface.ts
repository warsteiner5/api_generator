import { MarketApplicationDetailAlt } from './market-application-detail-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfMarketApplicationDetail = MarketJsonVoidResultAlt & { 'data'?: Array<MarketApplicationDetailAlt> | null; };
