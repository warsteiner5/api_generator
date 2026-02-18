import { ApiStopListItemDto } from '../../../swagger/models/api-stop-list-item-dto';
import { StopListItem } from '../../models/stop-list-item.interface';

export function adaptStopListItemToUI(source?: ApiStopListItemDto | null): StopListItem {
  return {
    banReason: source?.BanReason ?? '',
    bannedOrganizationId: source?.BannedOrganizationId ?? 0,
    endDate: source?.EndDate ?? '',
    id: source?.Id ?? 0,
    organizationId: source?.OrganizationId ?? 0,
    startDate: source?.StartDate ?? '',
    unbanReason: source?.UnbanReason ?? '',
    userId: source?.UserId ?? 0,
  };
}
