import { TenantsGetCreateOrderFormTemplateSettings$Params } from '../../../swagger/fn/tenants/tenants-get-create-order-form-template-settings';

export interface TenantsGetCreateOrderFormTemplateSettingsParams {
}

export const tenantsGetCreateOrderFormTemplateSettingsParamsAdapter = {
  adapt(params?: TenantsGetCreateOrderFormTemplateSettingsParams): TenantsGetCreateOrderFormTemplateSettings$Params {
    if (!params) {
      return {} as TenantsGetCreateOrderFormTemplateSettings$Params;
    }
    return {
    };
  }
};
