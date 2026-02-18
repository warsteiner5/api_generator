/* tslint:disable */
/* eslint-disable */
import { ApiKtruDto } from '../models/api-ktru-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfKtruDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiKtruDto | null;
};
