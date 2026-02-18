import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';

export type NicRegistrySearchFilter = BaseFilterObjectAlt & { 'ParticipantName'?: string | null; 'DateFrom'?: string | null; 'DateBy'?: string | null; };
