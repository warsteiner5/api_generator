import { ApiDiscussionDto } from '../../../swagger/models/api-discussion-dto';
import { Discussion } from '../../models/discussion.interface';

export const discussionAdapter = (source?: ApiDiscussionDto | null): Discussion => {
  return {
    applicationId: source?.ApplicationId,
    chatOrganizationMembers: source?.ChatOrganizationMembers,
    discussionOwnerGuid: source?.DiscussionOwnerGuid,
    discussionOwnerId: source?.DiscussionOwnerId,
    id: source?.Id,
    isChatBlocked: source?.IsChatBlocked,
    isChatEnabled: source?.IsChatEnabled,
    tradeId: source?.TradeId,
  };
}
