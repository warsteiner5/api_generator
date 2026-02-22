import { BaseFilterAlt } from './base-filter-alt.interface';

// @ts-ignore
export interface StopListItemFilterAlt extends BaseFilterAlt {
  organizationId: number;
  activeOnly: boolean;
}
