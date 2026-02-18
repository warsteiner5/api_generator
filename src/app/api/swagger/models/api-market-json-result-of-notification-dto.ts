/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiNotificationDto } from '../models/api-notification-dto';
export type ApiMarketJsonResultOfNotificationDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiNotificationDto | null;
};
