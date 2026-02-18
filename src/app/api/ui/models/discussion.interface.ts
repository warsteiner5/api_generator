export interface Discussion {
  applicationId: number;
  chatOrganizationMembers: number[];
  discussionOwnerGuid: string;
  discussionOwnerId: number;
  id: number;
  isChatBlocked: boolean;
  isChatEnabled: boolean;
  tradeId: number;
}
