import { InvitationGetAutoInvitationsInfo$Params } from '../../../swagger/fn/invitation/invitation-get-auto-invitations-info';

export interface InvitationGetAutoInvitationsInfoParams {
  tradeId: number;
}

export const invitationGetAutoInvitationsInfoParamsAdapter = {
  adapt(params?: InvitationGetAutoInvitationsInfoParams): InvitationGetAutoInvitationsInfo$Params {
    if (!params) {
      return {} as InvitationGetAutoInvitationsInfo$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
