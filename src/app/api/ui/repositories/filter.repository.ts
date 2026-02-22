import { FilterApiService } from '../../swagger/services/filter-api.service';
import { FilterDeleteParams, filterDeleteAdapter } from './params/filter-delete.params';
import { FilterDisableBannerParams, filterDisableBannerAdapter } from './params/filter-disable-banner.params';
import { FilterFindMyFilledFiltersParams, filterFindMyFilledFiltersAdapter } from './params/filter-find-my-filled-filters.params';
import { FilterGetBannerActivityParams, filterGetBannerActivityAdapter } from './params/filter-get-banner-activity.params';
import { FilterGetFilterByGuidParams, filterGetFilterByGuidAdapter } from './params/filter-get-filter-by-guid.params';
import { FilterGetFilterModelParams, filterGetFilterModelAdapter } from './params/filter-get-filter-model.params';
import { FilterObjectAlt } from '../models/filter-object-alt.interface';
import { filterObjectAltAdapter } from '../adapters/models/filter-object-alt.adapter';
import { FilterSaveFilterParams, filterSaveFilterAdapter } from './params/filter-save-filter.params';
import { FilterUpdateFilterParams, filterUpdateFilterAdapter } from './params/filter-update-filter.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketSearchRawModelAlt } from '../models/market-search-raw-model-alt.interface';
import { marketSearchRawModelAltAdapter } from '../adapters/models/market-search-raw-model-alt.adapter';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterRepository {
  private readonly _api = inject(FilterApiService);

  filterDelete(params: FilterDeleteParams): Observable<boolean> {
    return this._api.filterDelete(filterDeleteAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  filterDisableBanner(params?: FilterDisableBannerParams): Observable<Blob> {
    return this._api.filterDisableBanner(filterDisableBannerAdapter(params));
  }

  filterFindMyFilledFilters(params?: FilterFindMyFilledFiltersParams): Observable<FilterObjectAlt[]> {
    return this._api.filterFindMyFilledFilters(filterFindMyFilledFiltersAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => filterObjectAltAdapter(item)))
    );
  }

  filterGetBannerActivity(params?: FilterGetBannerActivityParams): Observable<Blob> {
    return this._api.filterGetBannerActivity(filterGetBannerActivityAdapter(params));
  }

  filterGetFilterByGuid(params: FilterGetFilterByGuidParams): Observable<FilterObjectAlt> {
    return this._api.filterGetFilterByGuid(filterGetFilterByGuidAdapter(params)).pipe(
      map((res) => filterObjectAltAdapter(res?.data))
    );
  }

  filterGetFilterModel(params?: FilterGetFilterModelParams): Observable<MarketSearchRawModelAlt> {
    return this._api.filterGetFilterModel(filterGetFilterModelAdapter(params)).pipe(
      map((res) => marketSearchRawModelAltAdapter(res?.data))
    );
  }

  filterSaveFilter(params?: FilterSaveFilterParams): Observable<number> {
    return this._api.filterSaveFilter(filterSaveFilterAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  filterUpdateFilter(params: FilterUpdateFilterParams): Observable<number> {
    return this._api.filterUpdateFilter(filterUpdateFilterAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
