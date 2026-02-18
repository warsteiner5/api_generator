import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { LotStateEnum } from '../enums/lot-state.enum';

export type TradesFilterObjectAlt = BaseFilterObjectAlt & { 'IsImmediate'?: boolean; 'TradeName'?: string | null; 'TradeNumber'?: string | null; 'TradeSections'?: Array<string> | null; 'TradeState'?: LotStateEnum | null; 'IsLapsed'?: boolean; 'FilterPriceMin'?: number | null; 'FilterPriceMax'?: number | null; 'FilterDateFrom'?: string | null; 'FilterDateTo'?: string | null; 'FilterFillingApplicationEndDateFrom'?: string | null; 'FilterFillingApplicationEndDateTo'?: string | null; 'CustomerFullNameOrInn'?: string | null; 'UseCustomerInn'?: boolean; 'UseCustomerName'?: boolean; };
