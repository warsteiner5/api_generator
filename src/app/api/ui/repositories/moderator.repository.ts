import { adaptModerationPriceListSearchItemToUI } from '../adapters/toUI/moderation-price-list-search-item.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { ModerationPriceListSearchItem } from '../models/moderation-price-list-search-item.interface';
import { ModeratorApiService } from '../../swagger/services/moderator-api.service';
import { ModeratorGetPriceListsByFilterParams, moderatorGetPriceListsByFilterParamsAdapter } from './params/moderator-get-price-lists-by-filter.params';
import { ModeratorStartParams, moderatorStartParamsAdapter } from './params/moderator-start.params';
import { ModeratorStopParams, moderatorStopParamsAdapter } from './params/moderator-stop.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModeratorRepository {
  private readonly _api = inject(ModeratorApiService);

  moderatorGetPriceListsByFilter(params?: ModeratorGetPriceListsByFilterParams): Observable<ModerationPriceListSearchItem[]> {
    return this._api.moderatorGetPriceListsByFilter(moderatorGetPriceListsByFilterParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptModerationPriceListSearchItemToUI(item)))
    );
  }

  moderatorStart(params: ModeratorStartParams): Observable<Blob> {
    return this._api.moderatorStart(moderatorStartParamsAdapter.adapt(params));
  }

  moderatorStop(params: ModeratorStopParams): Observable<Blob> {
    return this._api.moderatorStop(moderatorStopParamsAdapter.adapt(params));
  }

}
