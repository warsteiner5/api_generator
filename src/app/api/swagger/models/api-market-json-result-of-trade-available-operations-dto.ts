/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTradeAvailableOperationsDto } from '../models/api-trade-available-operations-dto';
export type ApiMarketJsonResultOfTradeAvailableOperationsDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiTradeAvailableOperationsDto | null;
};
