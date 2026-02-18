/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiRegulationDocumentTypeViewDto } from '../models/api-regulation-document-type-view-dto';
export type ApiMarketJsonResultOfRegulationDocumentTypeViewDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiRegulationDocumentTypeViewDto | null;
};
