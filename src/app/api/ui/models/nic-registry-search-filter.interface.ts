import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';

// @ts-ignore
export interface NicRegistrySearchFilter extends BaseFilterObjectAlt {
  participantName: string;
  dateFrom: string;
  dateBy: string;
}
