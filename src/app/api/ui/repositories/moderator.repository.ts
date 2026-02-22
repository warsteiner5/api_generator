import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { ModerationPriceListSearchItem } from '../models/moderation-price-list-search-item.interface';
import { moderationPriceListSearchItemAdapter } from '../adapters/models/moderation-price-list-search-item.adapter';
import { ModeratorApiService } from '../../swagger/services/moderator-api.service';
import { ModeratorGetPriceListsByFilterParams, moderatorGetPriceListsByFilterAdapter } from './params/moderator-get-price-lists-by-filter.params';
import { ModeratorStartParams, moderatorStartAdapter } from './params/moderator-start.params';
import { ModeratorStopParams, moderatorStopAdapter } from './params/moderator-stop.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModeratorRepository {
  private readonly _api = inject(ModeratorApiService);

  moderatorGetPriceListsByFilter(params?: ModeratorGetPriceListsByFilterParams): Observable<ModerationPriceListSearchItem[]> {
    return this._api.moderatorGetPriceListsByFilter(moderatorGetPriceListsByFilterAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => moderationPriceListSearchItemAdapter(item)))
    );
  }

  moderatorStart(params: ModeratorStartParams): Observable<Blob> {
    return this._api.moderatorStart(moderatorStartAdapter(params));
  }

  moderatorStop(params: ModeratorStopParams): Observable<Blob> {
    return this._api.moderatorStop(moderatorStopAdapter(params));
  }

}
