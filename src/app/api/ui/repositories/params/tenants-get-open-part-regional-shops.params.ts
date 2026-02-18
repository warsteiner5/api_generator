import { TenantsGetOpenPartRegionalShops$Params } from '../../../swagger/fn/tenants/tenants-get-open-part-regional-shops';

export interface TenantsGetOpenPartRegionalShopsParams {
}

export const tenantsGetOpenPartRegionalShopsParamsAdapter = {
  adapt(params?: TenantsGetOpenPartRegionalShopsParams): TenantsGetOpenPartRegionalShops$Params {
    if (!params) {
      return {} as TenantsGetOpenPartRegionalShops$Params;
    }
    return {
    };
  }
};
