/* tslint:disable */
/* eslint-disable */
import { ApiIndustryDto } from '../models/api-industry-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfIndustryDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiIndustryDto> | null;
};
