/* tslint:disable */
/* eslint-disable */
import { ApiCustomerComissionProtocolWithDocsDto } from '../models/api-customer-comission-protocol-with-docs-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiCustomerComissionProtocolWithDocsDto | null;
};
