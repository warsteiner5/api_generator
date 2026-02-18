import { BaseFilterAlt } from './base-filter-alt.interface';
import { CompetitiveListItemStateEnum } from '../enums/competitive-list-item-state.enum';

export type CompetetiveListFilterAlt = BaseFilterAlt & { 'TradeId'?: number; 'DeliveryKladrRegionCode'?: string | null; 'State'?: CompetitiveListItemStateEnum | null; };
