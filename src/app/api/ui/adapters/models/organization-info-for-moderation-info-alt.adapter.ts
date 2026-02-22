import { ApiOrganizationInfoForModerationInfoAltDto } from '../../../swagger/models/api-organization-info-for-moderation-info';
import { OrganizationInfoForModerationInfoAlt } from '../../models/organization-info-for-moderation-info-alt.interface';

export const organizationInfoForModerationInfoAltAdapter = (source?: ApiOrganizationInfoForModerationInfoAltDto | null): OrganizationInfoForModerationInfoAlt => {
  return {
    guid: source?.Guid,
    id: source?.Id,
    name: source?.Name,
  };
}
