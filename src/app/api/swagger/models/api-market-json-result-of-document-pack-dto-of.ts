/* tslint:disable */
/* eslint-disable */
import { ApiDocumentPackDto } from '../models/api-document-pack-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfDocumentPackDtoOf = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiDocumentPackDto> | null;
};
