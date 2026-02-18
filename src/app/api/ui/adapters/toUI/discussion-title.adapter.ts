import { ApiDiscussionTitleDto } from '../../../swagger/models/api-discussion-title-dto';
import { DiscussionTitle } from '../../models/discussion-title.interface';

export function adaptDiscussionTitleToUI(source?: ApiDiscussionTitleDto | null): DiscussionTitle {
  return {
    applicationId: source?.ApplicationId ?? 0,
    discussionId: source?.DiscussionId ?? 0,
    isBlocked: source?.IsBlocked ?? false,
    organizationName: source?.OrganizationName ?? '',
  };
}
