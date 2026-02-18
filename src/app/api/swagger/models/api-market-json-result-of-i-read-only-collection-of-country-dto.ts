/* tslint:disable */
/* eslint-disable */
import { ApiCountryDto } from '../models/api-country-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiCountryDto> | null;
};
