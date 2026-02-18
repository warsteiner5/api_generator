import { SearchTenantBindingModelAlt } from '../../models/search-tenant-binding-model-alt.interface';
import { TenantsGetTenantSettingsPost$Params } from '../../../swagger/fn/tenants/tenants-get-tenant-settings-post';
import { adaptApiSearchTenantBindingModelAltDto } from '../../adapters/toDto/api-search-tenant-binding-model.adapter';

export interface TenantsGetTenantSettingsPostParams {
  body?: SearchTenantBindingModelAlt;
}

export const tenantsGetTenantSettingsPostParamsAdapter = {
  adapt(params?: TenantsGetTenantSettingsPostParams): TenantsGetTenantSettingsPost$Params {
    if (!params) {
      return {} as TenantsGetTenantSettingsPost$Params;
    }
    return {
      body: adaptApiSearchTenantBindingModelAltDto(params.body),
    };
  }
};
