/* tslint:disable */
/* eslint-disable */
import { ApiEisDictionaryItemAltDto } from '../models/api-eis-dictionary-item';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItemAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiEisDictionaryItemAltDto> | null;
};
