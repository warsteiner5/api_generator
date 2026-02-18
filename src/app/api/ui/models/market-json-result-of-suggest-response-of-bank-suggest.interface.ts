import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SuggestResponseOfBankSuggest } from './suggest-response-of-bank-suggest.interface';

export type MarketJsonResultOfSuggestResponseOfBankSuggest = MarketJsonVoidResultAlt & { 'data'?: SuggestResponseOfBankSuggest | null; };
