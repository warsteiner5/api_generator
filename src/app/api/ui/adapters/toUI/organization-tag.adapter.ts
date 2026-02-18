import { ApiOrganizationTagDto } from '../../../swagger/models/api-organization-tag-dto';
import { OrganizationTag } from '../../models/organization-tag.interface';

export function adaptOrganizationTagToUI(source?: ApiOrganizationTagDto | null): OrganizationTag {
  return {
    code: source?.Code ?? '',
    isActive: source?.IsActive ?? false,
    order: source?.Order ?? 0,
  };
}
