import { ApprovalRequestHistoryView } from './approval-request-history-view.interface';
import { ApprovalRequestStateEnum } from '../enums/approval-request-state.enum';
import { MarketEntityTypeEnum } from '../enums/market-entity-type.enum';

export interface ApprovalRequestView {
  entityId: number;
  entityType: MarketEntityTypeEnum;
  history: ApprovalRequestHistoryView[];
  id: number;
  state: ApprovalRequestStateEnum;
}
