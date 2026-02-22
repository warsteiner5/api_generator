import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { NicRegistriesApiService } from '../../swagger/services/nic-registries-api.service';
import { NicRegistriesDeleteParams, nicRegistriesDeleteAdapter } from './params/nic-registries-delete.params';
import { NicRegistriesFindMyTradeParams, nicRegistriesFindMyTradeAdapter } from './params/nic-registries-find-my-trade.params';
import { NicRegistriesGetAgreementForCurrentUserParams, nicRegistriesGetAgreementForCurrentUserAdapter } from './params/nic-registries-get-agreement-for-current-user.params';
import { NicRegistriesGetByIdParams, nicRegistriesGetByIdAdapter } from './params/nic-registries-get-by-id.params';
import { NicRegistriesGetModelForCreateParams, nicRegistriesGetModelForCreateAdapter } from './params/nic-registries-get-model-for-create.params';
import { NicRegistriesSaveParams, nicRegistriesSaveAdapter } from './params/nic-registries-save.params';
import { NicRegistriesSearchParams, nicRegistriesSearchAdapter } from './params/nic-registries-search.params';
import { NicRegistryEntry } from '../models/nic-registry-entry.interface';
import { nicRegistryEntryAdapter } from '../adapters/models/nic-registry-entry.adapter';
import { NicRegistryGrid } from '../models/nic-registry-grid.interface';
import { nicRegistryGridAdapter } from '../adapters/models/nic-registry-grid.adapter';
import { NicRegistryTradeInfo } from '../models/nic-registry-trade-info.interface';
import { nicRegistryTradeInfoAdapter } from '../adapters/models/nic-registry-trade-info.adapter';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NicRegistriesRepository {
  private readonly _api = inject(NicRegistriesApiService);

  nicRegistriesDelete(params: NicRegistriesDeleteParams): Observable<boolean> {
    return this._api.nicRegistriesDelete(nicRegistriesDeleteAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  nicRegistriesFindMyTrade(params: NicRegistriesFindMyTradeParams): Observable<NicRegistryTradeInfo> {
    return this._api.nicRegistriesFindMyTrade(nicRegistriesFindMyTradeAdapter(params)).pipe(
      map((res) => nicRegistryTradeInfoAdapter(res?.data))
    );
  }

  nicRegistriesGetAgreementForCurrentUser(params?: NicRegistriesGetAgreementForCurrentUserParams): Observable<string> {
    return this._api.nicRegistriesGetAgreementForCurrentUser(nicRegistriesGetAgreementForCurrentUserAdapter(params));
  }

  nicRegistriesGetById(params: NicRegistriesGetByIdParams): Observable<Blob> {
    return this._api.nicRegistriesGetById(nicRegistriesGetByIdAdapter(params));
  }

  nicRegistriesGetModelForCreate(params?: NicRegistriesGetModelForCreateParams): Observable<NicRegistryEntry> {
    return this._api.nicRegistriesGetModelForCreate(nicRegistriesGetModelForCreateAdapter(params)).pipe(
      map((res) => nicRegistryEntryAdapter(res?.data))
    );
  }

  nicRegistriesSave(params?: NicRegistriesSaveParams): Observable<number> {
    return this._api.nicRegistriesSave(nicRegistriesSaveAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  nicRegistriesSearch(params?: NicRegistriesSearchParams): Observable<NicRegistryGrid[]> {
    return this._api.nicRegistriesSearch(nicRegistriesSearchAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => nicRegistryGridAdapter(item)))
    );
  }

}
