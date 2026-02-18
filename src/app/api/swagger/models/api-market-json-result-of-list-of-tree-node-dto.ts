/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTreeNodeDto } from '../models/api-tree-node-dto';
export type ApiMarketJsonResultOfListOfTreeNodeDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiTreeNodeDto> | null;
};
