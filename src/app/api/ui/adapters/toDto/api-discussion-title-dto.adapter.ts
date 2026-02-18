import { DiscussionTitle } from '../../models/discussion-title.interface';
import { ApiDiscussionTitleDto } from '../../../swagger/models/api-discussion-title-dto';

export function adaptApiDiscussionTitleDto(source?: DiscussionTitle | null): ApiDiscussionTitleDto {
  return {
    ApplicationId: source?.applicationId,
    DiscussionId: source?.discussionId,
    IsBlocked: source?.isBlocked,
    OrganizationName: source?.organizationName,
  };
}
