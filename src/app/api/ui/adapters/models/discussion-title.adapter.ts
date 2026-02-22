import { ApiDiscussionTitleDto } from '../../../swagger/models/api-discussion-title-dto';
import { DiscussionTitle } from '../../models/discussion-title.interface';

export const discussionTitleAdapter = (source?: ApiDiscussionTitleDto | null): DiscussionTitle => {
  return {
    applicationId: source?.ApplicationId,
    discussionId: source?.DiscussionId,
    isBlocked: source?.IsBlocked,
    organizationName: source?.OrganizationName,
  };
}
