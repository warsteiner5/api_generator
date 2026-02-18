import { ApprovalRequestStateEnum } from '../enums/approval-request-state.enum';
import { UserFullNameAlt } from './user-full-name-alt.interface';

export interface ApprovalRequestHistoryView {
  comment: string;
  dateTime: string;
  state: ApprovalRequestStateEnum;
  userId: number;
  userName: UserFullNameAlt;
}
