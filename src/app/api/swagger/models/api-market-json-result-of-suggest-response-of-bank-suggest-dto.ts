/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSuggestResponseOfBankSuggestDto } from '../models/api-suggest-response-of-bank-suggest-dto';
export type ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiSuggestResponseOfBankSuggestDto | null;
};
