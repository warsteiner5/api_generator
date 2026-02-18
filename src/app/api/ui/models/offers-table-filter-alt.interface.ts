import { BaseFilterAlt } from './base-filter-alt.interface';
import { CompetitiveListItemStateEnum } from '../enums/competitive-list-item-state.enum';

export type OffersTableFilterAlt = BaseFilterAlt & { 'RequirementRequestId'?: number; 'State'?: CompetitiveListItemStateEnum | null; 'CompetitiveListItems'?: Array<number> | null; };
