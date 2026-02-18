import { BaseFilterAlt } from './base-filter-alt.interface';

export type OrganizationFilterAlt = BaseFilterAlt & { 'KeyWords'?: string | null; 'RegionRF'?: string | null; 'KladrCodeRegionRF'?: string | null; };
