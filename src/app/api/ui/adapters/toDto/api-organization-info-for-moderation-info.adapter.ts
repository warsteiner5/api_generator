import { OrganizationInfoForModerationInfoAlt } from '../../models/organization-info-for-moderation-info-alt.interface';
import { ApiOrganizationInfoForModerationInfoAltDto } from '../../../swagger/models/api-organization-info-for-moderation-info';

export function adaptApiOrganizationInfoForModerationInfoAltDto(source?: OrganizationInfoForModerationInfoAlt | null): ApiOrganizationInfoForModerationInfoAltDto {
  return {
    Guid: source?.guid,
    Id: source?.id,
    Name: source?.name,
  };
}
