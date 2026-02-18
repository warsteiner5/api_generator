/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTelegramUrlAltDto } from '../models/api-telegram-url';
export type ApiMarketJsonResultOfTelegramUrl = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiTelegramUrlAltDto | null;
};
