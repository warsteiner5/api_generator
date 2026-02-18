/* tslint:disable */
/* eslint-disable */
import { ApiFavoriteCountInfoDto } from '../models/api-favorite-count-info-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfFavoriteCountInfoDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiFavoriteCountInfoDto | null;
};
