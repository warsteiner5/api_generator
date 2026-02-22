import { ApiStopListItemDto } from '../../../swagger/models/api-stop-list-item-dto';
import { StopListItem } from '../../models/stop-list-item.interface';

export const stopListItemAdapter = (source?: ApiStopListItemDto | null): StopListItem => {
  return {
    banReason: source?.BanReason,
    bannedOrganizationId: source?.BannedOrganizationId,
    endDate: source?.EndDate,
    id: source?.Id,
    organizationId: source?.OrganizationId,
    startDate: source?.StartDate,
    unbanReason: source?.UnbanReason,
    userId: source?.UserId,
  };
}
