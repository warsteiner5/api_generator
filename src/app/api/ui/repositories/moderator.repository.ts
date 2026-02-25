import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfModerationPriceListSearchItemAdapter } from '../adapters/models/market-pagination-result-of-list-of-moderation-price-list-search-item.adapter';
import { ModerationPriceListSearchItem } from '../models/moderation-price-list-search-item.interface';
import { ModeratorApiService } from '../../swagger/services/moderator-api.service';
import { ModeratorGetPriceListsByFilterParams, moderatorGetPriceListsByFilterAdapter } from './params/moderator-get-price-lists-by-filter.params';
import { ModeratorStartParams, moderatorStartAdapter } from './params/moderator-start.params';
import { ModeratorStopParams, moderatorStopAdapter } from './params/moderator-stop.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModeratorRepository {
  private readonly _api = inject(ModeratorApiService);

  moderatorGetPriceListsByFilter(params?: ModeratorGetPriceListsByFilterParams): Observable<MarketPaginationResult<ModerationPriceListSearchItem[]>> {
    return this._api.moderatorGetPriceListsByFilter(moderatorGetPriceListsByFilterAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfModerationPriceListSearchItemAdapter(res?.data))
    );
  }

  moderatorStart(params: ModeratorStartParams): Observable<Blob> {
    return this._api.moderatorStart(moderatorStartAdapter(params));
  }

  moderatorStop(params: ModeratorStopParams): Observable<Blob> {
    return this._api.moderatorStop(moderatorStopAdapter(params));
  }

}
