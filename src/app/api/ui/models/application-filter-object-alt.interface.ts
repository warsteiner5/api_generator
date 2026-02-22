import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { FilterApplicationStateAltEnum } from '../enums/filter-application-state-alt.enum';
import { SortingParamAlt } from './sorting-param-alt.interface';

// @ts-ignore
export interface ApplicationFilterObjectAlt extends BaseFilterObjectAlt {
  incomingNumber: number;
  tradeNumber: number;
  tradeName: string;
  publishDateFrom: string;
  publishDateTo: string;
  revokeDateFrom: string;
  revokeDateTo: string;
  state: FilterApplicationStateAltEnum;
  sortingParams: SortingParamAlt[];
}
