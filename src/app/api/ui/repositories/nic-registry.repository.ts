import { adaptNicRegistryEntryToUI } from '../adapters/toUI/nic-registry-entry.adapter';
import { adaptNicRegistryGridToUI } from '../adapters/toUI/nic-registry-grid.adapter';
import { adaptNicRegistryTradeInfoToUI } from '../adapters/toUI/nic-registry-trade-info.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { NicRegistryApiService } from '../../swagger/services/nic-registry-api.service';
import { NicRegistryDeleteParams, nicRegistryDeleteParamsAdapter } from './params/nic-registry-delete.params';
import { NicRegistryEntry } from '../models/nic-registry-entry.interface';
import { NicRegistryFindMyTradeParams, nicRegistryFindMyTradeParamsAdapter } from './params/nic-registry-find-my-trade.params';
import { NicRegistryGetAgreementForCurrentUserParams, nicRegistryGetAgreementForCurrentUserParamsAdapter } from './params/nic-registry-get-agreement-for-current-user.params';
import { NicRegistryGetByIdParams, nicRegistryGetByIdParamsAdapter } from './params/nic-registry-get-by-id.params';
import { NicRegistryGetModelForCreateParams, nicRegistryGetModelForCreateParamsAdapter } from './params/nic-registry-get-model-for-create.params';
import { NicRegistryGrid } from '../models/nic-registry-grid.interface';
import { NicRegistrySaveParams, nicRegistrySaveParamsAdapter } from './params/nic-registry-save.params';
import { NicRegistrySearchParams, nicRegistrySearchParamsAdapter } from './params/nic-registry-search.params';
import { NicRegistryTradeInfo } from '../models/nic-registry-trade-info.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NicRegistryRepository {
  private readonly _api = inject(NicRegistryApiService);

  nicRegistryDelete(params: NicRegistryDeleteParams): Observable<boolean> {
    return this._api.nicRegistryDelete(nicRegistryDeleteParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  nicRegistryFindMyTrade(params: NicRegistryFindMyTradeParams): Observable<NicRegistryTradeInfo> {
    return this._api.nicRegistryFindMyTrade(nicRegistryFindMyTradeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptNicRegistryTradeInfoToUI(res?.data))
    );
  }

  nicRegistryGetAgreementForCurrentUser(params?: NicRegistryGetAgreementForCurrentUserParams): Observable<Blob> {
    return this._api.nicRegistryGetAgreementForCurrentUser(nicRegistryGetAgreementForCurrentUserParamsAdapter.adapt(params));
  }

  nicRegistryGetById(params: NicRegistryGetByIdParams): Observable<NicRegistryEntry> {
    return this._api.nicRegistryGetById(nicRegistryGetByIdParamsAdapter.adapt(params)).pipe(
      map((res) => adaptNicRegistryEntryToUI(res?.data))
    );
  }

  nicRegistryGetModelForCreate(params?: NicRegistryGetModelForCreateParams): Observable<NicRegistryEntry> {
    return this._api.nicRegistryGetModelForCreate(nicRegistryGetModelForCreateParamsAdapter.adapt(params)).pipe(
      map((res) => adaptNicRegistryEntryToUI(res?.data))
    );
  }

  nicRegistrySave(params?: NicRegistrySaveParams): Observable<number> {
    return this._api.nicRegistrySave(nicRegistrySaveParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  nicRegistrySearch(params?: NicRegistrySearchParams): Observable<NicRegistryGrid[]> {
    return this._api.nicRegistrySearch(nicRegistrySearchParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptNicRegistryGridToUI(item)))
    );
  }

}
