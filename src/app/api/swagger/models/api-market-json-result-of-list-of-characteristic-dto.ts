/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicDto } from '../models/api-characteristic-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfCharacteristicDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiCharacteristicDto> | null;
};
