/* tslint:disable */
/* eslint-disable */
import { ApiHttpStatusCodeAltEnum } from '../models/api-http-status-code';
export interface ApiMarketJsonVoidResultAltDto {
  code?: ApiHttpStatusCodeAltEnum;
  message?: string | null;
  redirectToUrl?: string | null;
  templates?: ({
[key: string]: any;
}) | null;
}
