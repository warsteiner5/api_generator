import { ApiOrganizationShortInfoDto } from '../../../swagger/models/api-organization-short-info-dto';
import { OrganizationShortInfo } from '../../models/organization-short-info.interface';

export const organizationShortInfoAdapter = (source?: ApiOrganizationShortInfoDto | null): OrganizationShortInfo => {
  return {
    adminFulName: source?.AdminFulName,
    guid: source?.Guid,
    id: source?.Id,
    inn: source?.Inn,
    kpp: source?.Kpp,
    orgName: source?.OrgName,
  };
}
