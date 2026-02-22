import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MzPriceList } from '../models/mz-price-list.interface';
import { mzPriceListAdapter } from '../adapters/models/mz-price-list.adapter';
import { MzPriceListShortInfo } from '../models/mz-price-list-short-info.interface';
import { mzPriceListShortInfoAdapter } from '../adapters/models/mz-price-list-short-info.adapter';
import { Observable } from 'rxjs';
import { PriceListsApiService } from '../../swagger/services/price-lists-api.service';
import { PriceListsBindPriceListToOrganizationParams, priceListsBindPriceListToOrganizationAdapter } from './params/price-lists-bind-price-list-to-organization.params';
import { PriceListsChangePriceListStateParams, priceListsChangePriceListStateAdapter } from './params/price-lists-change-price-list-state.params';
import { PriceListsCreateAutoUpdateAndImportParams, priceListsCreateAutoUpdateAndImportAdapter } from './params/price-lists-create-auto-update-and-import.params';
import { PriceListsCreateDefaultPriceListInternalParams, priceListsCreateDefaultPriceListInternalAdapter } from './params/price-lists-create-default-price-list-internal.params';
import { PriceListsCreatePriceListParams, priceListsCreatePriceListAdapter } from './params/price-lists-create-price-list.params';
import { PriceListsEditPriceListParams, priceListsEditPriceListAdapter } from './params/price-lists-edit-price-list.params';
import { PriceListsGetActivePriceListsShortInfoParams, priceListsGetActivePriceListsShortInfoAdapter } from './params/price-lists-get-active-price-lists-short-info.params';
import { PriceListsGetAllPriceListsShortInfoParams, priceListsGetAllPriceListsShortInfoAdapter } from './params/price-lists-get-all-price-lists-short-info.params';
import { PriceListsGetPaginatedPriceListsParams, priceListsGetPaginatedPriceListsAdapter } from './params/price-lists-get-paginated-price-lists.params';
import { PriceListsGetParams, priceListsGetAdapter } from './params/price-lists-get.params';
import { PriceListsManualPriceListUpdatesParams, priceListsManualPriceListUpdatesAdapter } from './params/price-lists-manual-price-list-updates.params';
import { PriceListsManualRunPriceAutoUpdatesParams, priceListsManualRunPriceAutoUpdatesAdapter } from './params/price-lists-manual-run-price-auto-updates.params';
import { PriceListsRemovePriceListParams, priceListsRemovePriceListAdapter } from './params/price-lists-remove-price-list.params';

@Injectable({ providedIn: 'root' })
export class PriceListsRepository {
  private readonly _api = inject(PriceListsApiService);

  priceListsBindPriceListToOrganization(params: PriceListsBindPriceListToOrganizationParams): Observable<void> {
    return this._api.priceListsBindPriceListToOrganization(priceListsBindPriceListToOrganizationAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  priceListsChangePriceListState(params: PriceListsChangePriceListStateParams): Observable<void> {
    return this._api.priceListsChangePriceListState(priceListsChangePriceListStateAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  priceListsCreateAutoUpdateAndImport(params?: PriceListsCreateAutoUpdateAndImportParams): Observable<number> {
    return this._api.priceListsCreateAutoUpdateAndImport(priceListsCreateAutoUpdateAndImportAdapter(params));
  }

  priceListsCreateDefaultPriceListInternal(params?: PriceListsCreateDefaultPriceListInternalParams): Observable<number> {
    return this._api.priceListsCreateDefaultPriceListInternal(priceListsCreateDefaultPriceListInternalAdapter(params));
  }

  priceListsCreatePriceList(params?: PriceListsCreatePriceListParams): Observable<MzPriceList> {
    return this._api.priceListsCreatePriceList(priceListsCreatePriceListAdapter(params)).pipe(
      map((res) => mzPriceListAdapter(res?.data))
    );
  }

  priceListsEditPriceList(params?: PriceListsEditPriceListParams): Observable<MzPriceList> {
    return this._api.priceListsEditPriceList(priceListsEditPriceListAdapter(params)).pipe(
      map((res) => mzPriceListAdapter(res?.data))
    );
  }

  priceListsGet(params: PriceListsGetParams): Observable<MzPriceList> {
    return this._api.priceListsGet(priceListsGetAdapter(params)).pipe(
      map((res) => mzPriceListAdapter(res?.data))
    );
  }

  priceListsGetActivePriceListsShortInfo(params?: PriceListsGetActivePriceListsShortInfoParams): Observable<MzPriceListShortInfo[]> {
    return this._api.priceListsGetActivePriceListsShortInfo(priceListsGetActivePriceListsShortInfoAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => mzPriceListShortInfoAdapter(item)))
    );
  }

  priceListsGetAllPriceListsShortInfo(params?: PriceListsGetAllPriceListsShortInfoParams): Observable<MzPriceListShortInfo[]> {
    return this._api.priceListsGetAllPriceListsShortInfo(priceListsGetAllPriceListsShortInfoAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => mzPriceListShortInfoAdapter(item)))
    );
  }

  priceListsGetPaginatedPriceLists(params?: PriceListsGetPaginatedPriceListsParams): Observable<MzPriceList[]> {
    return this._api.priceListsGetPaginatedPriceLists(priceListsGetPaginatedPriceListsAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => mzPriceListAdapter(item)))
    );
  }

  priceListsManualPriceListUpdates(params: PriceListsManualPriceListUpdatesParams): Observable<void> {
    return this._api.priceListsManualPriceListUpdates(priceListsManualPriceListUpdatesAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  priceListsManualRunPriceAutoUpdates(params: PriceListsManualRunPriceAutoUpdatesParams): Observable<void> {
    return this._api.priceListsManualRunPriceAutoUpdates(priceListsManualRunPriceAutoUpdatesAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  priceListsRemovePriceList(params: PriceListsRemovePriceListParams): Observable<void> {
    return this._api.priceListsRemovePriceList(priceListsRemovePriceListAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
