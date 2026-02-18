/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiRegulationDocumentViewDto } from '../models/api-regulation-document-view-dto';
export type ApiMarketJsonResultOfRegulationDocumentViewDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiRegulationDocumentViewDto | null;
};
