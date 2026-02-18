/* tslint:disable */
/* eslint-disable */
import { ApiDictionaryItemAltDto } from '../models/api-dictionary-item';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItem = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiDictionaryItemAltDto> | null;
};
