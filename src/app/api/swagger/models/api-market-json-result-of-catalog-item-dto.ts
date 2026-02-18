/* tslint:disable */
/* eslint-disable */
import { ApiCatalogItemDto } from '../models/api-catalog-item-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCatalogItemDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiCatalogItemDto | null;
};
