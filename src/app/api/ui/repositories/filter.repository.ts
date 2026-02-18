import { adaptFilterObjectAltToUI } from '../adapters/toUI/filter-object-alt.adapter';
import { adaptMarketSearchRawModelAltToUI } from '../adapters/toUI/market-search-raw-model-alt.adapter';
import { FilterApiService } from '../../swagger/services/filter-api.service';
import { FilterDeleteParams, filterDeleteParamsAdapter } from './params/filter-delete.params';
import { FilterDisableBannerParams, filterDisableBannerParamsAdapter } from './params/filter-disable-banner.params';
import { FilterFindMyFilledFiltersParams, filterFindMyFilledFiltersParamsAdapter } from './params/filter-find-my-filled-filters.params';
import { FilterGetBannerActivityParams, filterGetBannerActivityParamsAdapter } from './params/filter-get-banner-activity.params';
import { FilterGetFilterByGuidParams, filterGetFilterByGuidParamsAdapter } from './params/filter-get-filter-by-guid.params';
import { FilterGetFilterModelParams, filterGetFilterModelParamsAdapter } from './params/filter-get-filter-model.params';
import { FilterObjectAlt } from '../models/filter-object-alt.interface';
import { FilterSaveFilterParams, filterSaveFilterParamsAdapter } from './params/filter-save-filter.params';
import { FilterUpdateFilterParams, filterUpdateFilterParamsAdapter } from './params/filter-update-filter.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketSearchRawModelAlt } from '../models/market-search-raw-model-alt.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterRepository {
  private readonly _api = inject(FilterApiService);

  filterDelete(params: FilterDeleteParams): Observable<boolean> {
    return this._api.filterDelete(filterDeleteParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  filterDisableBanner(params?: FilterDisableBannerParams): Observable<Blob> {
    return this._api.filterDisableBanner(filterDisableBannerParamsAdapter.adapt(params));
  }

  filterFindMyFilledFilters(params?: FilterFindMyFilledFiltersParams): Observable<FilterObjectAlt[]> {
    return this._api.filterFindMyFilledFilters(filterFindMyFilledFiltersParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptFilterObjectAltToUI(item)))
    );
  }

  filterGetBannerActivity(params?: FilterGetBannerActivityParams): Observable<Blob> {
    return this._api.filterGetBannerActivity(filterGetBannerActivityParamsAdapter.adapt(params));
  }

  filterGetFilterByGuid(params: FilterGetFilterByGuidParams): Observable<FilterObjectAlt> {
    return this._api.filterGetFilterByGuid(filterGetFilterByGuidParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFilterObjectAltToUI(res?.data))
    );
  }

  filterGetFilterModel(params?: FilterGetFilterModelParams): Observable<MarketSearchRawModelAlt> {
    return this._api.filterGetFilterModel(filterGetFilterModelParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketSearchRawModelAltToUI(res?.data))
    );
  }

  filterSaveFilter(params?: FilterSaveFilterParams): Observable<number> {
    return this._api.filterSaveFilter(filterSaveFilterParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  filterUpdateFilter(params: FilterUpdateFilterParams): Observable<number> {
    return this._api.filterUpdateFilter(filterUpdateFilterParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
