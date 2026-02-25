import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfStopListItemAdapter } from '../adapters/models/market-pagination-result-of-list-of-stop-list-item.adapter';
import { marketPaginationResultOfListOfStopListItemExtendedAdapter } from '../adapters/models/market-pagination-result-of-list-of-stop-list-item-extended.adapter';
import { Observable } from 'rxjs';
import { StopListItem } from '../models/stop-list-item.interface';
import { StopListItemApiService } from '../../swagger/services/stop-list-item-api.service';
import { StopListItemBanSupplierParams, stopListItemBanSupplierAdapter } from './params/stop-list-item-ban-supplier.params';
import { StopListItemCheckIfBannedParams, stopListItemCheckIfBannedAdapter } from './params/stop-list-item-check-if-banned.params';
import { StopListItemCheckIfIamBannedParams, stopListItemCheckIfIamBannedAdapter } from './params/stop-list-item-check-if-iam-banned.params';
import { StopListItemExtended } from '../models/stop-list-item-extended.interface';
import { StopListItemGetPaginateStopListItemExtetndedsParams, stopListItemGetPaginateStopListItemExtetndedsAdapter } from './params/stop-list-item-get-paginate-stop-list-item-extetndeds.params';
import { StopListItemGetPaginateStopListItemsParams, stopListItemGetPaginateStopListItemsAdapter } from './params/stop-list-item-get-paginate-stop-list-items.params';
import { StopListItemUnbanSupplierParams, stopListItemUnbanSupplierAdapter } from './params/stop-list-item-unban-supplier.params';
import { StopListItemUnbanSupplierTotalParams, stopListItemUnbanSupplierTotalAdapter } from './params/stop-list-item-unban-supplier-total.params';

@Injectable({ providedIn: 'root' })
export class StopListItemRepository {
  private readonly _api = inject(StopListItemApiService);

  stopListItemBanSupplier(params?: StopListItemBanSupplierParams): Observable<number> {
    return this._api.stopListItemBanSupplier(stopListItemBanSupplierAdapter(params));
  }

  stopListItemCheckIfBanned(params: StopListItemCheckIfBannedParams): Observable<boolean> {
    return this._api.stopListItemCheckIfBanned(stopListItemCheckIfBannedAdapter(params));
  }

  stopListItemCheckIfIamBanned(params: StopListItemCheckIfIamBannedParams): Observable<boolean> {
    return this._api.stopListItemCheckIfIamBanned(stopListItemCheckIfIamBannedAdapter(params));
  }

  stopListItemGetPaginateStopListItemExtetndeds(params?: StopListItemGetPaginateStopListItemExtetndedsParams): Observable<MarketPaginationResult<StopListItemExtended[]>> {
    return this._api.stopListItemGetPaginateStopListItemExtetndeds(stopListItemGetPaginateStopListItemExtetndedsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfStopListItemExtendedAdapter(res?.data))
    );
  }

  stopListItemGetPaginateStopListItems(params?: StopListItemGetPaginateStopListItemsParams): Observable<MarketPaginationResult<StopListItem[]>> {
    return this._api.stopListItemGetPaginateStopListItems(stopListItemGetPaginateStopListItemsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfStopListItemAdapter(res?.data))
    );
  }

  stopListItemUnbanSupplier(params: StopListItemUnbanSupplierParams): Observable<Blob> {
    return this._api.stopListItemUnbanSupplier(stopListItemUnbanSupplierAdapter(params));
  }

  stopListItemUnbanSupplierTotal(params: StopListItemUnbanSupplierTotalParams): Observable<Blob> {
    return this._api.stopListItemUnbanSupplierTotal(stopListItemUnbanSupplierTotalAdapter(params));
  }

}
