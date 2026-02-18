/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOrganizationProfileDocumentDto } from '../models/api-organization-profile-document-dto';
export type ApiMarketJsonResultOfOrganizationProfileDocumentDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiOrganizationProfileDocumentDto | null;
};
