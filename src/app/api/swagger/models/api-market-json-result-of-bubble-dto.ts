/* tslint:disable */
/* eslint-disable */
import { ApiBubbleDto } from '../models/api-bubble-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfBubbleDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiBubbleDto | null;
};
