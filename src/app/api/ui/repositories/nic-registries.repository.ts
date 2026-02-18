import { adaptNicRegistryEntryToUI } from '../adapters/toUI/nic-registry-entry.adapter';
import { adaptNicRegistryGridToUI } from '../adapters/toUI/nic-registry-grid.adapter';
import { adaptNicRegistryTradeInfoToUI } from '../adapters/toUI/nic-registry-trade-info.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { NicRegistriesApiService } from '../../swagger/services/nic-registries-api.service';
import { NicRegistriesDeleteParams, nicRegistriesDeleteParamsAdapter } from './params/nic-registries-delete.params';
import { NicRegistriesFindMyTradeParams, nicRegistriesFindMyTradeParamsAdapter } from './params/nic-registries-find-my-trade.params';
import { NicRegistriesGetAgreementForCurrentUserParams, nicRegistriesGetAgreementForCurrentUserParamsAdapter } from './params/nic-registries-get-agreement-for-current-user.params';
import { NicRegistriesGetByIdParams, nicRegistriesGetByIdParamsAdapter } from './params/nic-registries-get-by-id.params';
import { NicRegistriesGetModelForCreateParams, nicRegistriesGetModelForCreateParamsAdapter } from './params/nic-registries-get-model-for-create.params';
import { NicRegistriesSaveParams, nicRegistriesSaveParamsAdapter } from './params/nic-registries-save.params';
import { NicRegistriesSearchParams, nicRegistriesSearchParamsAdapter } from './params/nic-registries-search.params';
import { NicRegistryEntry } from '../models/nic-registry-entry.interface';
import { NicRegistryGrid } from '../models/nic-registry-grid.interface';
import { NicRegistryTradeInfo } from '../models/nic-registry-trade-info.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NicRegistriesRepository {
  private readonly _api = inject(NicRegistriesApiService);

  nicRegistriesDelete(params: NicRegistriesDeleteParams): Observable<boolean> {
    return this._api.nicRegistriesDelete(nicRegistriesDeleteParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  nicRegistriesFindMyTrade(params: NicRegistriesFindMyTradeParams): Observable<NicRegistryTradeInfo> {
    return this._api.nicRegistriesFindMyTrade(nicRegistriesFindMyTradeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptNicRegistryTradeInfoToUI(res?.data))
    );
  }

  nicRegistriesGetAgreementForCurrentUser(params?: NicRegistriesGetAgreementForCurrentUserParams): Observable<string> {
    return this._api.nicRegistriesGetAgreementForCurrentUser(nicRegistriesGetAgreementForCurrentUserParamsAdapter.adapt(params));
  }

  nicRegistriesGetById(params: NicRegistriesGetByIdParams): Observable<Blob> {
    return this._api.nicRegistriesGetById(nicRegistriesGetByIdParamsAdapter.adapt(params));
  }

  nicRegistriesGetModelForCreate(params?: NicRegistriesGetModelForCreateParams): Observable<NicRegistryEntry> {
    return this._api.nicRegistriesGetModelForCreate(nicRegistriesGetModelForCreateParamsAdapter.adapt(params)).pipe(
      map((res) => adaptNicRegistryEntryToUI(res?.data))
    );
  }

  nicRegistriesSave(params?: NicRegistriesSaveParams): Observable<number> {
    return this._api.nicRegistriesSave(nicRegistriesSaveParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  nicRegistriesSearch(params?: NicRegistriesSearchParams): Observable<NicRegistryGrid[]> {
    return this._api.nicRegistriesSearch(nicRegistriesSearchParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptNicRegistryGridToUI(item)))
    );
  }

}
