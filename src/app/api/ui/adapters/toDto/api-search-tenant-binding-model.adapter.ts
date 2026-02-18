import { SearchTenantBindingModelAlt } from '../../models/search-tenant-binding-model-alt.interface';
import { ApiSearchTenantBindingModelAltDto } from '../../../swagger/models/api-search-tenant-binding-model';

export function adaptApiSearchTenantBindingModelAltDto(source?: SearchTenantBindingModelAlt | null): ApiSearchTenantBindingModelAltDto {
  return {
    OrganizationId: source?.organizationId,
    SearchUrl: source?.searchUrl,
  };
}
