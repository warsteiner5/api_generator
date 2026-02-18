import { ApiSearchTenantBindingModelAltDto } from '../../../swagger/models/api-search-tenant-binding-model';
import { SearchTenantBindingModelAlt } from '../../models/search-tenant-binding-model-alt.interface';

export function adaptSearchTenantBindingModelAltToUI(source?: ApiSearchTenantBindingModelAltDto | null): SearchTenantBindingModelAlt {
  return {
    organizationId: source?.OrganizationId ?? '',
    searchUrl: source?.SearchUrl ?? '',
  };
}
