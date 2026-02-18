import { ApprovalRequestStateEnum } from '../enums/approval-request-state.enum';
import { BaseFilterAlt } from './base-filter-alt.interface';
import { MarketEntityTypeEnum } from '../enums/market-entity-type.enum';

export type EntitiesWithApprovalRequestFilterAlt = BaseFilterAlt & { 'ApprovalRequestStates'?: Array<ApprovalRequestStateEnum> | null; 'EntityType'?: MarketEntityTypeEnum | null; 'CurrentOrganizationId'?: number | null; 'CurrentUserWorkGroupIds'?: Array<number> | null; };
