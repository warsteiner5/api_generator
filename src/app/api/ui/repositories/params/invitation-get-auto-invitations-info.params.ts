import { InvitationGetAutoInvitationsInfo$Params } from '../../../swagger/fn/invitation/invitation-get-auto-invitations-info';

// @ts-ignore
export interface InvitationGetAutoInvitationsInfoParams {
  tradeId: number;
}

export function invitationGetAutoInvitationsInfoAdapter(params?: InvitationGetAutoInvitationsInfoParams): InvitationGetAutoInvitationsInfo$Params {
  if (!params) {
    return {} as InvitationGetAutoInvitationsInfo$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
