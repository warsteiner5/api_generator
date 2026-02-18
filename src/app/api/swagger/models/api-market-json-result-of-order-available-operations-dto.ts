/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOrderAvailableOperationsDto } from '../models/api-order-available-operations-dto';
export type ApiMarketJsonResultOfOrderAvailableOperationsDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiOrderAvailableOperationsDto | null;
};
