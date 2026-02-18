/* tslint:disable */
/* eslint-disable */
import { ApiCategoryDto } from '../models/api-category-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCategoryDtoOf = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiCategoryDto> | null;
};
