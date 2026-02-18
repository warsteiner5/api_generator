/* tslint:disable */
/* eslint-disable */
import { ApiCategoryWithChildrenDto } from '../models/api-category-with-children-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCategoryWithChildrenDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiCategoryWithChildrenDto | null;
};
