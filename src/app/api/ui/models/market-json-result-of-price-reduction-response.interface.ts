import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { PriceReductionResponseAlt } from './price-reduction-response-alt.interface';

export type MarketJsonResultOfPriceReductionResponse = MarketJsonVoidResultAlt & { 'data'?: PriceReductionResponseAlt | null; };
