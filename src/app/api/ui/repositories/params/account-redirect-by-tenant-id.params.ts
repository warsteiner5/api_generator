import { AccountRedirectByTenantId$Params } from '../../../swagger/fn/account/account-redirect-by-tenant-id';

export interface AccountRedirectByTenantIdParams {
  tenantId: number;
}

export const accountRedirectByTenantIdParamsAdapter = {
  adapt(params?: AccountRedirectByTenantIdParams): AccountRedirectByTenantId$Params {
    if (!params) {
      return {} as AccountRedirectByTenantId$Params;
    }
    return {
      tenantId: params.tenantId,
    };
  }
};
