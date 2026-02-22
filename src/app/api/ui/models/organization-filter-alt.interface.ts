import { BaseFilterAlt } from './base-filter-alt.interface';

// @ts-ignore
export interface OrganizationFilterAlt extends BaseFilterAlt {
  keyWords: string;
  regionRF: string;
  kladrCodeRegionRF: string;
}
