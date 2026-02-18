import { ApprovalRequestGetOrCreateRequestAlt } from './approval-request-get-or-create-request-alt.interface';

export type ApprovalRequestCreate = ApprovalRequestGetOrCreateRequestAlt & { 'TradeWorkGroups'?: Array<number> | null; };
