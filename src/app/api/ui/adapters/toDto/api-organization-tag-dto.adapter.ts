import { OrganizationTag } from '../../models/organization-tag.interface';
import { ApiOrganizationTagDto } from '../../../swagger/models/api-organization-tag-dto';

export function adaptApiOrganizationTagDto(source?: OrganizationTag | null): ApiOrganizationTagDto {
  return {
    Code: source?.code,
    IsActive: source?.isActive,
    Order: source?.order,
  };
}
