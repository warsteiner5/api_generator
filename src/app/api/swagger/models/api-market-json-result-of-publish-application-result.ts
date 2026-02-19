/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiPublishApplicationResultAltDto } from '../models/api-publish-application-result';
export type ApiMarketJsonResultOfPublishApplicationResultAltDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiPublishApplicationResultAltDto | null;
};
