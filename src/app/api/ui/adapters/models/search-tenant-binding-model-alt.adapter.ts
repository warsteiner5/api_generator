import { ApiSearchTenantBindingModelAltDto } from '../../../swagger/models/api-search-tenant-binding-model';
import { SearchTenantBindingModelAlt } from '../../models/search-tenant-binding-model-alt.interface';

export const searchTenantBindingModelAltAdapter = (source?: ApiSearchTenantBindingModelAltDto | null): SearchTenantBindingModelAlt => {
  return {
    organizationId: source?.OrganizationId,
    searchUrl: source?.SearchUrl,
  };
}
