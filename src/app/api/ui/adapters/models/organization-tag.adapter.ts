import { ApiOrganizationTagDto } from '../../../swagger/models/api-organization-tag-dto';
import { OrganizationTag } from '../../models/organization-tag.interface';

export const organizationTagAdapter = (source?: ApiOrganizationTagDto | null): OrganizationTag => {
  return {
    code: source?.Code,
    isActive: source?.IsActive,
    order: source?.Order,
  };
}
