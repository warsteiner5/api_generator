import { TenantsGetCreateTradeFormTemplateSettings$Params } from '../../../swagger/fn/tenants/tenants-get-create-trade-form-template-settings';

export interface TenantsGetCreateTradeFormTemplateSettingsParams {
}

export const tenantsGetCreateTradeFormTemplateSettingsParamsAdapter = {
  adapt(params?: TenantsGetCreateTradeFormTemplateSettingsParams): TenantsGetCreateTradeFormTemplateSettings$Params {
    if (!params) {
      return {} as TenantsGetCreateTradeFormTemplateSettings$Params;
    }
    return {
    };
  }
};
