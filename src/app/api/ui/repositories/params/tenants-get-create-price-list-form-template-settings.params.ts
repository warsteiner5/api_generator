import { TenantsGetCreatePriceListFormTemplateSettings$Params } from '../../../swagger/fn/tenants/tenants-get-create-price-list-form-template-settings';

export interface TenantsGetCreatePriceListFormTemplateSettingsParams {
}

export const tenantsGetCreatePriceListFormTemplateSettingsParamsAdapter = {
  adapt(params?: TenantsGetCreatePriceListFormTemplateSettingsParams): TenantsGetCreatePriceListFormTemplateSettings$Params {
    if (!params) {
      return {} as TenantsGetCreatePriceListFormTemplateSettings$Params;
    }
    return {
    };
  }
};
