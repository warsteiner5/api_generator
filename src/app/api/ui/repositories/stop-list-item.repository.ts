import { adaptStopListItemExtendedToUI } from '../adapters/toUI/stop-list-item-extended.adapter';
import { adaptStopListItemToUI } from '../adapters/toUI/stop-list-item.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StopListItem } from '../models/stop-list-item.interface';
import { StopListItemApiService } from '../../swagger/services/stop-list-item-api.service';
import { StopListItemBanSupplierParams, stopListItemBanSupplierParamsAdapter } from './params/stop-list-item-ban-supplier.params';
import { StopListItemCheckIfBannedParams, stopListItemCheckIfBannedParamsAdapter } from './params/stop-list-item-check-if-banned.params';
import { StopListItemCheckIfIamBannedParams, stopListItemCheckIfIamBannedParamsAdapter } from './params/stop-list-item-check-if-iam-banned.params';
import { StopListItemExtended } from '../models/stop-list-item-extended.interface';
import { StopListItemGetPaginateStopListItemExtetndedsParams, stopListItemGetPaginateStopListItemExtetndedsParamsAdapter } from './params/stop-list-item-get-paginate-stop-list-item-extetndeds.params';
import { StopListItemGetPaginateStopListItemsParams, stopListItemGetPaginateStopListItemsParamsAdapter } from './params/stop-list-item-get-paginate-stop-list-items.params';
import { StopListItemUnbanSupplierParams, stopListItemUnbanSupplierParamsAdapter } from './params/stop-list-item-unban-supplier.params';
import { StopListItemUnbanSupplierTotalParams, stopListItemUnbanSupplierTotalParamsAdapter } from './params/stop-list-item-unban-supplier-total.params';

@Injectable({ providedIn: 'root' })
export class StopListItemRepository {
  private readonly _api = inject(StopListItemApiService);

  stopListItemBanSupplier(params?: StopListItemBanSupplierParams): Observable<number> {
    return this._api.stopListItemBanSupplier(stopListItemBanSupplierParamsAdapter.adapt(params));
  }

  stopListItemCheckIfBanned(params: StopListItemCheckIfBannedParams): Observable<boolean> {
    return this._api.stopListItemCheckIfBanned(stopListItemCheckIfBannedParamsAdapter.adapt(params));
  }

  stopListItemCheckIfIamBanned(params: StopListItemCheckIfIamBannedParams): Observable<boolean> {
    return this._api.stopListItemCheckIfIamBanned(stopListItemCheckIfIamBannedParamsAdapter.adapt(params));
  }

  stopListItemGetPaginateStopListItemExtetndeds(params?: StopListItemGetPaginateStopListItemExtetndedsParams): Observable<StopListItemExtended[]> {
    return this._api.stopListItemGetPaginateStopListItemExtetndeds(stopListItemGetPaginateStopListItemExtetndedsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptStopListItemExtendedToUI(item)))
    );
  }

  stopListItemGetPaginateStopListItems(params?: StopListItemGetPaginateStopListItemsParams): Observable<StopListItem[]> {
    return this._api.stopListItemGetPaginateStopListItems(stopListItemGetPaginateStopListItemsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptStopListItemToUI(item)))
    );
  }

  stopListItemUnbanSupplier(params: StopListItemUnbanSupplierParams): Observable<Blob> {
    return this._api.stopListItemUnbanSupplier(stopListItemUnbanSupplierParamsAdapter.adapt(params));
  }

  stopListItemUnbanSupplierTotal(params: StopListItemUnbanSupplierTotalParams): Observable<Blob> {
    return this._api.stopListItemUnbanSupplierTotal(stopListItemUnbanSupplierTotalParamsAdapter.adapt(params));
  }

}
