/* tslint:disable */
/* eslint-disable */
import { ApiIndustryDto } from '../models/api-industry-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfIndustryDtoOf = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiIndustryDto> | null;
};
