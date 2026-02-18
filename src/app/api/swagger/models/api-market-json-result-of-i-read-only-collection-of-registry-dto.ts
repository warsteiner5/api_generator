/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiRegistryDto } from '../models/api-registry-dto';
export type ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiRegistryDto> | null;
};
