import { SearchTenantBindingModelAlt } from '../../models/search-tenant-binding-model-alt.interface';
import { TenantsGetTenantSettingsPost$Params } from '../../../swagger/fn/tenants/tenants-get-tenant-settings-post';
import { apiSearchTenantBindingModelAltDtoAdapter } from '../../adapters/models/api-search-tenant-binding-model.adapter';

// @ts-ignore
export interface TenantsGetTenantSettingsPostParams {
  body?: SearchTenantBindingModelAlt;
}

export function tenantsGetTenantSettingsPostAdapter(params?: TenantsGetTenantSettingsPostParams): TenantsGetTenantSettingsPost$Params {
  if (!params) {
    return {} as TenantsGetTenantSettingsPost$Params;
  }
  return {
      body: apiSearchTenantBindingModelAltDtoAdapter(params.body),
  };
}
