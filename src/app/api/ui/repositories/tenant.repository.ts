import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TenantApiService } from '../../swagger/services/tenant-api.service';
import { TenantCheckTenantPpIntegrationParams, tenantCheckTenantPpIntegrationParamsAdapter } from './params/tenant-check-tenant-pp-integration.params';
import { TenantGetGlobalMarketTenantHostParams, tenantGetGlobalMarketTenantHostParamsAdapter } from './params/tenant-get-global-market-tenant-host.params';
import { TenantGetParticipantLoginRedirectTenantHostParams, tenantGetParticipantLoginRedirectTenantHostParamsAdapter } from './params/tenant-get-participant-login-redirect-tenant-host.params';
import { TenantGetTenantHostParams, tenantGetTenantHostParamsAdapter } from './params/tenant-get-tenant-host.params';

@Injectable({ providedIn: 'root' })
export class TenantRepository {
  private readonly _api = inject(TenantApiService);

  tenantCheckTenantPpIntegration(params: TenantCheckTenantPpIntegrationParams): Observable<Blob> {
    return this._api.tenantCheckTenantPpIntegration(tenantCheckTenantPpIntegrationParamsAdapter.adapt(params));
  }

  tenantGetGlobalMarketTenantHost(params?: TenantGetGlobalMarketTenantHostParams): Observable<Blob> {
    return this._api.tenantGetGlobalMarketTenantHost(tenantGetGlobalMarketTenantHostParamsAdapter.adapt(params));
  }

  tenantGetParticipantLoginRedirectTenantHost(params?: TenantGetParticipantLoginRedirectTenantHostParams): Observable<Blob> {
    return this._api.tenantGetParticipantLoginRedirectTenantHost(tenantGetParticipantLoginRedirectTenantHostParamsAdapter.adapt(params));
  }

  tenantGetTenantHost(params: TenantGetTenantHostParams): Observable<Blob> {
    return this._api.tenantGetTenantHost(tenantGetTenantHostParamsAdapter.adapt(params));
  }

}
