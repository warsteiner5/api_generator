import { BaseFilterAlt } from './base-filter-alt.interface';
import { CompetitiveListItemStateEnum } from '../enums/competitive-list-item-state.enum';

// @ts-ignore
export interface OffersTableFilterAlt extends BaseFilterAlt {
  requirementRequestId: number;
  state: CompetitiveListItemStateEnum;
  competitiveListItems: number[];
}
