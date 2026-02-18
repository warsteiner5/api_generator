import { BaseFilterAlt } from './base-filter-alt.interface';

export type StopListItemFilterAlt = BaseFilterAlt & { 'OrganizationId'?: number; 'ActiveOnly'?: boolean; };
