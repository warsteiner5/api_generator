import { TenantsGetOrderAcceptFormTemplateSettings$Params } from '../../../swagger/fn/tenants/tenants-get-order-accept-form-template-settings';

export interface TenantsGetOrderAcceptFormTemplateSettingsParams {
}

export const tenantsGetOrderAcceptFormTemplateSettingsParamsAdapter = {
  adapt(params?: TenantsGetOrderAcceptFormTemplateSettingsParams): TenantsGetOrderAcceptFormTemplateSettings$Params {
    if (!params) {
      return {} as TenantsGetOrderAcceptFormTemplateSettings$Params;
    }
    return {
    };
  }
};
