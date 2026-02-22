import { InviteGetEmailsForInvite$Params } from '../../../swagger/fn/invite/invite-get-emails-for-invite';

// @ts-ignore
export interface InviteGetEmailsForInviteParams {
  fileGuid: string;
}

export function inviteGetEmailsForInviteAdapter(params?: InviteGetEmailsForInviteParams): InviteGetEmailsForInvite$Params {
  if (!params) {
    return {} as InviteGetEmailsForInvite$Params;
  }
  return {
      fileGuid: params.fileGuid,
  };
}
