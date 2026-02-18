import { OrganizationShortInfo } from '../../models/organization-short-info.interface';
import { ApiOrganizationShortInfoDto } from '../../../swagger/models/api-organization-short-info-dto';

export function adaptApiOrganizationShortInfoDto(source?: OrganizationShortInfo | null): ApiOrganizationShortInfoDto {
  return {
    AdminFulName: source?.adminFulName,
    Guid: source?.guid,
    Id: source?.id,
    Inn: source?.inn,
    Kpp: source?.kpp,
    OrgName: source?.orgName,
  };
}
