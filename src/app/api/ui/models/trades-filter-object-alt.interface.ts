import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { LotStateEnum } from '../enums/lot-state.enum';

// @ts-ignore
export interface TradesFilterObjectAlt extends BaseFilterObjectAlt {
  isImmediate: boolean;
  tradeName: string;
  tradeNumber: string;
  tradeSections: string[];
  tradeState: LotStateEnum;
  isLapsed: boolean;
  filterPriceMin: number;
  filterPriceMax: number;
  filterDateFrom: string;
  filterDateTo: string;
  filterFillingApplicationEndDateFrom: string;
  filterFillingApplicationEndDateTo: string;
  customerFullNameOrInn: string;
  useCustomerInn: boolean;
  useCustomerName: boolean;
}
