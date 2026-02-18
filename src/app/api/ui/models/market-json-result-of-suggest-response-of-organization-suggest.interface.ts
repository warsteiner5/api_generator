import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SuggestResponseOfOrganizationSuggest } from './suggest-response-of-organization-suggest.interface';

export type MarketJsonResultOfSuggestResponseOfOrganizationSuggest = MarketJsonVoidResultAlt & { 'data'?: SuggestResponseOfOrganizationSuggest | null; };
