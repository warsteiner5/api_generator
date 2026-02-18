/* tslint:disable */
/* eslint-disable */
import { ApiAgreement2323Dto } from '../models/api-agreement-2323-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfTaskOfAgreement2323Dto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiAgreement2323Dto | null;
};
