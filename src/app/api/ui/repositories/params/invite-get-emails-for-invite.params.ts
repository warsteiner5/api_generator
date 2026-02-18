import { InviteGetEmailsForInvite$Params } from '../../../swagger/fn/invite/invite-get-emails-for-invite';

export interface InviteGetEmailsForInviteParams {
  fileGuid: string;
}

export const inviteGetEmailsForInviteParamsAdapter = {
  adapt(params?: InviteGetEmailsForInviteParams): InviteGetEmailsForInvite$Params {
    if (!params) {
      return {} as InviteGetEmailsForInvite$Params;
    }
    return {
      fileGuid: params.fileGuid,
    };
  }
};
