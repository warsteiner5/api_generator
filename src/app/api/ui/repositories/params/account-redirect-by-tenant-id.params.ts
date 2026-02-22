import { AccountRedirectByTenantId$Params } from '../../../swagger/fn/account/account-redirect-by-tenant-id';

// @ts-ignore
export interface AccountRedirectByTenantIdParams {
  tenantId: number;
}

export function accountRedirectByTenantIdAdapter(params?: AccountRedirectByTenantIdParams): AccountRedirectByTenantId$Params {
  if (!params) {
    return {} as AccountRedirectByTenantId$Params;
  }
  return {
      tenantId: params.tenantId,
  };
}
