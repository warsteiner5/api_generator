import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';

// @ts-ignore
export interface ShortFilter extends BaseFilterObjectAlt {
  keyword: string;
  priceListId: number;
  states: number[];
  minPrice: number;
  maxPrice: number;
  okeiCode: string;
  countryCodes: string[];
  regionCodes: string[];
  categoryIds: string[];
  availableTenantIds: number[];
  okpd2Codes: string[];
  whiteList: number[];
  blackList: number[];
  organizationId: number;
  hasYmlData: boolean;
  regionalProductSignEmpty: boolean;
}
