/* tslint:disable */
/* eslint-disable */
import { ApiInformSupplierBeforeApplicationDto } from '../models/api-inform-supplier-before-application-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfInformSupplierBeforeApplicationDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiInformSupplierBeforeApplicationDto | null;
};
