/* tslint:disable */
/* eslint-disable */
import { ApiApplicationAvailableOperationDto } from '../models/api-application-available-operation-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfApplicationAvailableOperationDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiApplicationAvailableOperationDto | null;
};
