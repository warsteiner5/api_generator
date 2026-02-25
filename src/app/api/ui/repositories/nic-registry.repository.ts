import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfNicRegistryGridAdapter } from '../adapters/models/market-pagination-result-of-list-of-nic-registry-grid.adapter';
import { NicRegistryApiService } from '../../swagger/services/nic-registry-api.service';
import { NicRegistryDeleteParams, nicRegistryDeleteAdapter } from './params/nic-registry-delete.params';
import { NicRegistryEntry } from '../models/nic-registry-entry.interface';
import { nicRegistryEntryAdapter } from '../adapters/models/nic-registry-entry.adapter';
import { NicRegistryFindMyTradeParams, nicRegistryFindMyTradeAdapter } from './params/nic-registry-find-my-trade.params';
import { NicRegistryGetAgreementForCurrentUserParams, nicRegistryGetAgreementForCurrentUserAdapter } from './params/nic-registry-get-agreement-for-current-user.params';
import { NicRegistryGetByIdParams, nicRegistryGetByIdAdapter } from './params/nic-registry-get-by-id.params';
import { NicRegistryGetModelForCreateParams, nicRegistryGetModelForCreateAdapter } from './params/nic-registry-get-model-for-create.params';
import { NicRegistryGrid } from '../models/nic-registry-grid.interface';
import { NicRegistrySaveParams, nicRegistrySaveAdapter } from './params/nic-registry-save.params';
import { NicRegistrySearchParams, nicRegistrySearchAdapter } from './params/nic-registry-search.params';
import { NicRegistryTradeInfo } from '../models/nic-registry-trade-info.interface';
import { nicRegistryTradeInfoAdapter } from '../adapters/models/nic-registry-trade-info.adapter';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NicRegistryRepository {
  private readonly _api = inject(NicRegistryApiService);

  nicRegistryDelete(params: NicRegistryDeleteParams): Observable<boolean> {
    return this._api.nicRegistryDelete(nicRegistryDeleteAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  nicRegistryFindMyTrade(params: NicRegistryFindMyTradeParams): Observable<NicRegistryTradeInfo> {
    return this._api.nicRegistryFindMyTrade(nicRegistryFindMyTradeAdapter(params)).pipe(
      map((res) => nicRegistryTradeInfoAdapter(res?.data))
    );
  }

  nicRegistryGetAgreementForCurrentUser(params?: NicRegistryGetAgreementForCurrentUserParams): Observable<Blob> {
    return this._api.nicRegistryGetAgreementForCurrentUser(nicRegistryGetAgreementForCurrentUserAdapter(params));
  }

  nicRegistryGetById(params: NicRegistryGetByIdParams): Observable<NicRegistryEntry> {
    return this._api.nicRegistryGetById(nicRegistryGetByIdAdapter(params)).pipe(
      map((res) => nicRegistryEntryAdapter(res?.data))
    );
  }

  nicRegistryGetModelForCreate(params?: NicRegistryGetModelForCreateParams): Observable<NicRegistryEntry> {
    return this._api.nicRegistryGetModelForCreate(nicRegistryGetModelForCreateAdapter(params)).pipe(
      map((res) => nicRegistryEntryAdapter(res?.data))
    );
  }

  nicRegistrySave(params?: NicRegistrySaveParams): Observable<number> {
    return this._api.nicRegistrySave(nicRegistrySaveAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  nicRegistrySearch(params?: NicRegistrySearchParams): Observable<MarketPaginationResult<NicRegistryGrid[]>> {
    return this._api.nicRegistrySearch(nicRegistrySearchAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfNicRegistryGridAdapter(res?.data))
    );
  }

}
