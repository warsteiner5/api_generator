import { TenantGetParticipantLoginRedirectTenantHost$Params } from '../../../swagger/fn/tenant/tenant-get-participant-login-redirect-tenant-host';

export interface TenantGetParticipantLoginRedirectTenantHostParams {
}

export const tenantGetParticipantLoginRedirectTenantHostParamsAdapter = {
  adapt(params?: TenantGetParticipantLoginRedirectTenantHostParams): TenantGetParticipantLoginRedirectTenantHost$Params {
    if (!params) {
      return {} as TenantGetParticipantLoginRedirectTenantHost$Params;
    }
    return {
    };
  }
};
