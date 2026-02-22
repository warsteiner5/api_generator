import { ApiModerationPriceListSearchItemDto } from '../../../swagger/models/api-moderation-price-list-search-item-dto';
import { ModerationPriceListSearchItem } from '../../models/moderation-price-list-search-item.interface';
import { complaintsCountInfoAdapter } from './complaints-count-info.adapter';
import { organizationInfoForModerationInfoAltAdapter } from './organization-info-for-moderation-info-alt.adapter';
import { uploaderRoleAltEnumAdapter } from '../enums/uploader-role-alt-enum.adapter';
import { userNameInfoAltAdapter } from './user-name-info-alt.adapter';

export const moderationPriceListSearchItemAdapter = (source?: ApiModerationPriceListSearchItemDto | null): ModerationPriceListSearchItem => {
  return {
    activeCount: source?.ActiveCount,
    complaintsInfo: source?.ComplaintsInfo === null ? undefined : complaintsCountInfoAdapter(source?.ComplaintsInfo),
    draftsCount: source?.DraftsCount,
    hasActiveModerations: source?.HasActiveModerations,
    id: source?.Id,
    isFinished: source?.IsFinished,
    isModerationRequired: source?.IsModerationRequired,
    lastModerated: source?.LastModerated,
    lastModified: source?.LastModified,
    manager: source?.Manager === null ? undefined : userNameInfoAltAdapter(source?.Manager),
    moderator: source?.Moderator === null ? undefined : userNameInfoAltAdapter(source?.Moderator),
    name: source?.Name,
    organization: source?.Organization === null ? undefined : organizationInfoForModerationInfoAltAdapter(source?.Organization),
    participantOffersCount: source?.ParticipantOffersCount,
    uploaderRole: source?.UploaderRole === null ? undefined : uploaderRoleAltEnumAdapter(source?.UploaderRole),
    waitingForApproveCount: source?.WaitingForApproveCount,
  };
}
