import { ModerationPriceListSearchItem } from '../../models/moderation-price-list-search-item.interface';
import { ApiModerationPriceListSearchItemDto } from '../../../swagger/models/api-moderation-price-list-search-item-dto';
import { apiComplaintsCountInfoDtoAdapter } from './api-complaints-count-info-dto.adapter';
import { apiOrganizationInfoForModerationInfoAltDtoAdapter } from './api-organization-info-for-moderation-info.adapter';
import { apiUploaderRoleAltEnumAdapter } from '../enums/api-uploader-role.adapter';
import { apiUserNameInfoAltDtoAdapter } from './api-user-name-info.adapter';

export const apiModerationPriceListSearchItemDtoAdapter = (source?: ModerationPriceListSearchItem | null): ApiModerationPriceListSearchItemDto => {
  return {
    ActiveCount: source?.activeCount,
    ComplaintsInfo: source?.complaintsInfo === null ? undefined : apiComplaintsCountInfoDtoAdapter(source?.complaintsInfo),
    DraftsCount: source?.draftsCount,
    HasActiveModerations: source?.hasActiveModerations,
    Id: source?.id,
    IsFinished: source?.isFinished,
    IsModerationRequired: source?.isModerationRequired,
    LastModerated: source?.lastModerated,
    LastModified: source?.lastModified,
    Manager: source?.manager === null ? undefined : apiUserNameInfoAltDtoAdapter(source?.manager),
    Moderator: source?.moderator === null ? undefined : apiUserNameInfoAltDtoAdapter(source?.moderator),
    Name: source?.name,
    Organization: source?.organization === null ? undefined : apiOrganizationInfoForModerationInfoAltDtoAdapter(source?.organization),
    ParticipantOffersCount: source?.participantOffersCount,
    UploaderRole: source?.uploaderRole === null ? undefined : apiUploaderRoleAltEnumAdapter(source?.uploaderRole),
    WaitingForApproveCount: source?.waitingForApproveCount,
  };
}
