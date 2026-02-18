import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { LotStateEnum } from '../enums/lot-state.enum';

export type TradesFilterObjectForAnonymousAlt = BaseFilterObjectAlt & { 'TradeNumber'?: string | null; 'TradeName'?: string | null; 'ClassificatorCodes'?: Array<string> | null; 'IsImmediate'?: boolean; 'CustomerAddress'?: string | null; 'FilterPriceMin'?: number | null; 'FilterPriceMax'?: number | null; 'FilterDateFrom'?: string | null; 'FilterDateTo'?: string | null; 'FilterFillingApplicationEndDateFrom'?: string | null; 'FilterFillingApplicationEndDateTo'?: string | null; 'CustomerFullNameOrInn'?: string | null; 'UseCustomerInn'?: boolean; 'UseCustomerName'?: boolean; 'TradeState'?: LotStateEnum | null; };
