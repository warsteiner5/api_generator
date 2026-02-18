import { ApprovalRequestView } from './approval-request-view.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfApprovalRequestView = MarketJsonVoidResultAlt & { 'data'?: ApprovalRequestView | null; };
