import { InvitationGetOrganizationForInvite$Params } from '../../../swagger/fn/invitation/invitation-get-organization-for-invite';

// @ts-ignore
export interface InvitationGetOrganizationForInviteParams {
  tradeLotId?: number;
  tradeId?: number;
  page?: number;
  itemsPerPage?: number;
  sortField?: string;
  sortDirection?: string;
}

export function invitationGetOrganizationForInviteAdapter(params?: InvitationGetOrganizationForInviteParams): InvitationGetOrganizationForInvite$Params {
  if (!params) {
    return {} as InvitationGetOrganizationForInvite$Params;
  }
  return {
      TradeLotId: params.tradeLotId,
      TradeId: params.tradeId,
      Page: params.page,
      ItemsPerPage: params.itemsPerPage,
      SortField: params.sortField,
      SortDirection: params.sortDirection,
  };
}
