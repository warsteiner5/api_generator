/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiNicRegistryTradeInfoDto } from '../models/api-nic-registry-trade-info-dto';
export type ApiMarketJsonResultOfNicRegistryTradeInfoDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiNicRegistryTradeInfoDto | null;
};
