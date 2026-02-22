import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';

// @ts-ignore
export interface OutDocumentFilter extends BaseFilterObjectAlt {
  beginDateFrom: string;
  beginDateTo: string;
  notificationNumber: string;
  onlyNew: boolean;
  kindNames: string[];
  organizationId: number;
  externalSystemId: number;
}
