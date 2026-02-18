/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiReadItemInfoAltDto } from '../models/api-read-item-info';
export type ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo = ApiMarketJsonVoidResultAltDto & {
'data'?: ({
[key: string]: Array<ApiReadItemInfoAltDto>;
}) | null;
};
