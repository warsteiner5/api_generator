import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SuggestResponseOfAddress } from './suggest-response-of-address.interface';

export type MarketJsonResultOfSuggestResponseOfAddress = MarketJsonVoidResultAlt & { 'data'?: SuggestResponseOfAddress | null; };
