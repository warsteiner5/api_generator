/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiSuggestResponseOfAddressDto } from '../models/api-suggest-response-of-address-dto';
export type ApiMarketJsonResultOfSuggestResponseOfAddressDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiSuggestResponseOfAddressDto | null;
};
