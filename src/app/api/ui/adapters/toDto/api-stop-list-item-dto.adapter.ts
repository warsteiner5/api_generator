import { StopListItem } from '../../models/stop-list-item.interface';
import { ApiStopListItemDto } from '../../../swagger/models/api-stop-list-item-dto';

export function adaptApiStopListItemDto(source?: StopListItem | null): ApiStopListItemDto {
  return {
    BanReason: source?.banReason,
    BannedOrganizationId: source?.bannedOrganizationId,
    EndDate: source?.endDate,
    Id: source?.id,
    OrganizationId: source?.organizationId,
    StartDate: source?.startDate,
    UnbanReason: source?.unbanReason,
    UserId: source?.userId,
  };
}
