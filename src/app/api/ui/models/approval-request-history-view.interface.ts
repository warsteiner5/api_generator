import { ApprovalRequestStateEnum } from '../enums/approval-request-state.enum';
import { UserFullNameAlt } from './user-full-name-alt.interface';

// @ts-ignore
export interface ApprovalRequestHistoryView {
  comment: string;
  dateTime: string;
  state: ApprovalRequestStateEnum;
  userId: number;
  userName: UserFullNameAlt;
}
