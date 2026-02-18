import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { FilterApplicationStateAltEnum } from '../enums/filter-application-state-alt.enum';
import { SortingParamAlt } from './sorting-param-alt.interface';

export type ApplicationFilterObjectAlt = BaseFilterObjectAlt & { 'IncomingNumber'?: number | null; 'TradeNumber'?: number | null; 'TradeName'?: string | null; 'PublishDateFrom'?: string | null; 'PublishDateTo'?: string | null; 'RevokeDateFrom'?: string | null; 'RevokeDateTo'?: string | null; 'State'?: FilterApplicationStateAltEnum | null; 'SortingParams'?: Array<SortingParamAlt> | null; };
