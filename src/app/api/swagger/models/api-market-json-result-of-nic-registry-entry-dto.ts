/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiNicRegistryEntryDto } from '../models/api-nic-registry-entry-dto';
export type ApiMarketJsonResultOfNicRegistryEntryDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiNicRegistryEntryDto | null;
};
