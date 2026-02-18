import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';

export type OutDocumentFilter = BaseFilterObjectAlt & { 'BeginDateFrom'?: string | null; 'BeginDateTo'?: string | null; 'NotificationNumber'?: string | null; 'OnlyNew'?: boolean; 'KindNames'?: Array<string> | null; 'OrganizationId'?: number; 'ExternalSystemId'?: number; };
