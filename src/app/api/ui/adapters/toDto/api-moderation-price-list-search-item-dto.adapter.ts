import { ModerationPriceListSearchItem } from '../../models/moderation-price-list-search-item.interface';
import { ApiModerationPriceListSearchItemDto } from '../../../swagger/models/api-moderation-price-list-search-item-dto';
import { adaptApiComplaintsCountInfoDto } from './api-complaints-count-info-dto.adapter';
import { adaptApiOrganizationInfoForModerationInfoAltDto } from './api-organization-info-for-moderation-info.adapter';
import { adaptApiUploaderRoleAltEnum } from './api-uploader-role.adapter';
import { adaptApiUserNameInfoAltDto } from './api-user-name-info.adapter';

export function adaptApiModerationPriceListSearchItemDto(source?: ModerationPriceListSearchItem | null): ApiModerationPriceListSearchItemDto {
  return {
    ActiveCount: source?.activeCount,
    ComplaintsInfo: adaptApiComplaintsCountInfoDto(source?.complaintsInfo),
    DraftsCount: source?.draftsCount,
    HasActiveModerations: source?.hasActiveModerations,
    Id: source?.id,
    IsFinished: source?.isFinished,
    IsModerationRequired: source?.isModerationRequired,
    LastModerated: source?.lastModerated,
    LastModified: source?.lastModified,
    Manager: adaptApiUserNameInfoAltDto(source?.manager),
    Moderator: adaptApiUserNameInfoAltDto(source?.moderator),
    Name: source?.name,
    Organization: adaptApiOrganizationInfoForModerationInfoAltDto(source?.organization),
    ParticipantOffersCount: source?.participantOffersCount,
    UploaderRole: adaptApiUploaderRoleAltEnum(source?.uploaderRole),
    WaitingForApproveCount: source?.waitingForApproveCount,
  };
}
