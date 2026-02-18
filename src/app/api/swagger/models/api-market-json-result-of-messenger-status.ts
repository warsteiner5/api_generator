/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiMessengerStatusAltDto } from '../models/api-messenger-status';
export type ApiMarketJsonResultOfMessengerStatus = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiMessengerStatusAltDto | null;
};
