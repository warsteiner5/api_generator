import { Discussion } from '../../models/discussion.interface';
import { ApiDiscussionDto } from '../../../swagger/models/api-discussion-dto';

export const apiDiscussionDtoAdapter = (source?: Discussion | null): ApiDiscussionDto => {
  return {
    ApplicationId: source?.applicationId,
    ChatOrganizationMembers: source?.chatOrganizationMembers,
    DiscussionOwnerGuid: source?.discussionOwnerGuid,
    DiscussionOwnerId: source?.discussionOwnerId,
    Id: source?.id,
    IsChatBlocked: source?.isChatBlocked,
    IsChatEnabled: source?.isChatEnabled,
    TradeId: source?.tradeId,
  };
}
