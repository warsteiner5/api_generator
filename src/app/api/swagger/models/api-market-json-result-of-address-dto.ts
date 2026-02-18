/* tslint:disable */
/* eslint-disable */
import { ApiAddressDto2 } from '../models/api-address-dto-2';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfAddressDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiAddressDto2 | null;
};
