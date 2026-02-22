import { ApprovalRequestStateEnum } from '../enums/approval-request-state.enum';
import { BaseFilterAlt } from './base-filter-alt.interface';
import { MarketEntityTypeEnum } from '../enums/market-entity-type.enum';

// @ts-ignore
export interface EntitiesWithApprovalRequestFilterAlt extends BaseFilterAlt {
  approvalRequestStates: ApprovalRequestStateEnum[];
  entityType: MarketEntityTypeEnum;
  currentOrganizationId: number;
  currentUserWorkGroupIds: number[];
}
