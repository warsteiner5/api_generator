import { adaptMzPriceListShortInfoToUI } from '../adapters/toUI/mz-price-list-short-info.adapter';
import { adaptMzPriceListToUI } from '../adapters/toUI/mz-price-list.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MzPriceList } from '../models/mz-price-list.interface';
import { MzPriceListShortInfo } from '../models/mz-price-list-short-info.interface';
import { Observable } from 'rxjs';
import { PriceListsApiService } from '../../swagger/services/price-lists-api.service';
import { PriceListsBindPriceListToOrganizationParams, priceListsBindPriceListToOrganizationParamsAdapter } from './params/price-lists-bind-price-list-to-organization.params';
import { PriceListsChangePriceListStateParams, priceListsChangePriceListStateParamsAdapter } from './params/price-lists-change-price-list-state.params';
import { PriceListsCreateAutoUpdateAndImportParams, priceListsCreateAutoUpdateAndImportParamsAdapter } from './params/price-lists-create-auto-update-and-import.params';
import { PriceListsCreateDefaultPriceListInternalParams, priceListsCreateDefaultPriceListInternalParamsAdapter } from './params/price-lists-create-default-price-list-internal.params';
import { PriceListsCreatePriceListParams, priceListsCreatePriceListParamsAdapter } from './params/price-lists-create-price-list.params';
import { PriceListsEditPriceListParams, priceListsEditPriceListParamsAdapter } from './params/price-lists-edit-price-list.params';
import { PriceListsGetActivePriceListsShortInfoParams, priceListsGetActivePriceListsShortInfoParamsAdapter } from './params/price-lists-get-active-price-lists-short-info.params';
import { PriceListsGetAllPriceListsShortInfoParams, priceListsGetAllPriceListsShortInfoParamsAdapter } from './params/price-lists-get-all-price-lists-short-info.params';
import { PriceListsGetPaginatedPriceListsParams, priceListsGetPaginatedPriceListsParamsAdapter } from './params/price-lists-get-paginated-price-lists.params';
import { PriceListsGetParams, priceListsGetParamsAdapter } from './params/price-lists-get.params';
import { PriceListsManualPriceListUpdatesParams, priceListsManualPriceListUpdatesParamsAdapter } from './params/price-lists-manual-price-list-updates.params';
import { PriceListsManualRunPriceAutoUpdatesParams, priceListsManualRunPriceAutoUpdatesParamsAdapter } from './params/price-lists-manual-run-price-auto-updates.params';
import { PriceListsRemovePriceListParams, priceListsRemovePriceListParamsAdapter } from './params/price-lists-remove-price-list.params';

@Injectable({ providedIn: 'root' })
export class PriceListsRepository {
  private readonly _api = inject(PriceListsApiService);

  priceListsBindPriceListToOrganization(params: PriceListsBindPriceListToOrganizationParams): Observable<void> {
    return this._api.priceListsBindPriceListToOrganization(priceListsBindPriceListToOrganizationParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  priceListsChangePriceListState(params: PriceListsChangePriceListStateParams): Observable<void> {
    return this._api.priceListsChangePriceListState(priceListsChangePriceListStateParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  priceListsCreateAutoUpdateAndImport(params?: PriceListsCreateAutoUpdateAndImportParams): Observable<number> {
    return this._api.priceListsCreateAutoUpdateAndImport(priceListsCreateAutoUpdateAndImportParamsAdapter.adapt(params));
  }

  priceListsCreateDefaultPriceListInternal(params?: PriceListsCreateDefaultPriceListInternalParams): Observable<number> {
    return this._api.priceListsCreateDefaultPriceListInternal(priceListsCreateDefaultPriceListInternalParamsAdapter.adapt(params));
  }

  priceListsCreatePriceList(params?: PriceListsCreatePriceListParams): Observable<MzPriceList> {
    return this._api.priceListsCreatePriceList(priceListsCreatePriceListParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMzPriceListToUI(res?.data))
    );
  }

  priceListsEditPriceList(params?: PriceListsEditPriceListParams): Observable<MzPriceList> {
    return this._api.priceListsEditPriceList(priceListsEditPriceListParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMzPriceListToUI(res?.data))
    );
  }

  priceListsGet(params: PriceListsGetParams): Observable<MzPriceList> {
    return this._api.priceListsGet(priceListsGetParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMzPriceListToUI(res?.data))
    );
  }

  priceListsGetActivePriceListsShortInfo(params?: PriceListsGetActivePriceListsShortInfoParams): Observable<MzPriceListShortInfo[]> {
    return this._api.priceListsGetActivePriceListsShortInfo(priceListsGetActivePriceListsShortInfoParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMzPriceListShortInfoToUI(item)))
    );
  }

  priceListsGetAllPriceListsShortInfo(params?: PriceListsGetAllPriceListsShortInfoParams): Observable<MzPriceListShortInfo[]> {
    return this._api.priceListsGetAllPriceListsShortInfo(priceListsGetAllPriceListsShortInfoParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMzPriceListShortInfoToUI(item)))
    );
  }

  priceListsGetPaginatedPriceLists(params?: PriceListsGetPaginatedPriceListsParams): Observable<MzPriceList[]> {
    return this._api.priceListsGetPaginatedPriceLists(priceListsGetPaginatedPriceListsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMzPriceListToUI(item)))
    );
  }

  priceListsManualPriceListUpdates(params: PriceListsManualPriceListUpdatesParams): Observable<void> {
    return this._api.priceListsManualPriceListUpdates(priceListsManualPriceListUpdatesParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  priceListsManualRunPriceAutoUpdates(params: PriceListsManualRunPriceAutoUpdatesParams): Observable<void> {
    return this._api.priceListsManualRunPriceAutoUpdates(priceListsManualRunPriceAutoUpdatesParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  priceListsRemovePriceList(params: PriceListsRemovePriceListParams): Observable<void> {
    return this._api.priceListsRemovePriceList(priceListsRemovePriceListParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
