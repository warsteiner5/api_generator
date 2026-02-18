/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
export type ApiOutDocumentFilterDto = ApiBaseFilterObjectAltDto & {
'BeginDateFrom'?: string | null;
'BeginDateTo'?: string | null;
'NotificationNumber'?: string | null;
'OnlyNew'?: boolean;
'KindNames'?: Array<string> | null;
'OrganizationId'?: number;
'ExternalSystemId'?: number;
};
