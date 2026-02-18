import { ApiDiscussionDto } from '../../../swagger/models/api-discussion-dto';
import { Discussion } from '../../models/discussion.interface';

export function adaptDiscussionToUI(source?: ApiDiscussionDto | null): Discussion {
  return {
    applicationId: source?.ApplicationId ?? 0,
    chatOrganizationMembers: source?.ChatOrganizationMembers ?? [],
    discussionOwnerGuid: source?.DiscussionOwnerGuid ?? '',
    discussionOwnerId: source?.DiscussionOwnerId ?? 0,
    id: source?.Id ?? 0,
    isChatBlocked: source?.IsChatBlocked ?? false,
    isChatEnabled: source?.IsChatEnabled ?? false,
    tradeId: source?.TradeId ?? 0,
  };
}
