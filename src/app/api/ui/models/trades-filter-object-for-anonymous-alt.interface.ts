import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { LotStateEnum } from '../enums/lot-state.enum';

// @ts-ignore
export interface TradesFilterObjectForAnonymousAlt extends BaseFilterObjectAlt {
  tradeNumber: string;
  tradeName: string;
  classificatorCodes: string[];
  isImmediate: boolean;
  customerAddress: string;
  filterPriceMin: number;
  filterPriceMax: number;
  filterDateFrom: string;
  filterDateTo: string;
  filterFillingApplicationEndDateFrom: string;
  filterFillingApplicationEndDateTo: string;
  customerFullNameOrInn: string;
  useCustomerInn: boolean;
  useCustomerName: boolean;
  tradeState: LotStateEnum;
}
