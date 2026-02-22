import { ApprovalRequestGetOrCreateRequestAlt } from './approval-request-get-or-create-request-alt.interface';

// @ts-ignore
export interface ApprovalRequestCreate extends ApprovalRequestGetOrCreateRequestAlt {
  tradeWorkGroups: number[];
}
