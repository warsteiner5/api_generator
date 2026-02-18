/* tslint:disable */
/* eslint-disable */
import { ApiApplicationDocumentDto } from '../models/api-application-document-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfApplicationDocumentDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiApplicationDocumentDto | null;
};
