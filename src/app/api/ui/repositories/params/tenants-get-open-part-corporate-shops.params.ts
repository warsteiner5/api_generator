import { TenantsGetOpenPartCorporateShops$Params } from '../../../swagger/fn/tenants/tenants-get-open-part-corporate-shops';

export interface TenantsGetOpenPartCorporateShopsParams {
}

export const tenantsGetOpenPartCorporateShopsParamsAdapter = {
  adapt(params?: TenantsGetOpenPartCorporateShopsParams): TenantsGetOpenPartCorporateShops$Params {
    if (!params) {
      return {} as TenantsGetOpenPartCorporateShops$Params;
    }
    return {
    };
  }
};
