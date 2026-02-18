import { ApiModerationPriceListSearchItemDto } from '../../../swagger/models/api-moderation-price-list-search-item-dto';
import { ModerationPriceListSearchItem } from '../../models/moderation-price-list-search-item.interface';
import { adaptComplaintsCountInfoToUI } from './complaints-count-info.adapter';
import { adaptOrganizationInfoForModerationInfoAltToUI } from './organization-info-for-moderation-info-alt.adapter';
import { adaptUploaderRoleAltEnumToUI } from './uploader-role-alt-enum.adapter';
import { adaptUserNameInfoAltToUI } from './user-name-info-alt.adapter';

export function adaptModerationPriceListSearchItemToUI(source?: ApiModerationPriceListSearchItemDto | null): ModerationPriceListSearchItem {
  return {
    activeCount: source?.ActiveCount ?? 0,
    complaintsInfo: adaptComplaintsCountInfoToUI(source?.ComplaintsInfo),
    draftsCount: source?.DraftsCount ?? 0,
    hasActiveModerations: source?.HasActiveModerations ?? false,
    id: source?.Id ?? 0,
    isFinished: source?.IsFinished ?? false,
    isModerationRequired: source?.IsModerationRequired ?? false,
    lastModerated: source?.LastModerated ?? '',
    lastModified: source?.LastModified ?? '',
    manager: adaptUserNameInfoAltToUI(source?.Manager),
    moderator: adaptUserNameInfoAltToUI(source?.Moderator),
    name: source?.Name ?? '',
    organization: adaptOrganizationInfoForModerationInfoAltToUI(source?.Organization),
    participantOffersCount: source?.ParticipantOffersCount ?? 0,
    uploaderRole: adaptUploaderRoleAltEnumToUI(source?.UploaderRole),
    waitingForApproveCount: source?.WaitingForApproveCount ?? 0,
  };
}
