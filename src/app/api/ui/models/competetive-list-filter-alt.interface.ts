import { BaseFilterAlt } from './base-filter-alt.interface';
import { CompetitiveListItemStateEnum } from '../enums/competitive-list-item-state.enum';

// @ts-ignore
export interface CompetetiveListFilterAlt extends BaseFilterAlt {
  tradeId: number;
  deliveryKladrRegionCode: string;
  state: CompetitiveListItemStateEnum;
}
