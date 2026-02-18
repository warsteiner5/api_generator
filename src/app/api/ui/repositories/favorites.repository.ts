import { adaptFavoriteCountInfoToUI } from '../adapters/toUI/favorite-count-info.adapter';
import { adaptMarketOrganizationShortInfoToUI } from '../adapters/toUI/market-organization-short-info.adapter';
import { adaptMarketSearchResultToUI } from '../adapters/toUI/market-search-result.adapter';
import { FavoriteCountInfo } from '../models/favorite-count-info.interface';
import { FavoritesAddFavoriteParams, favoritesAddFavoriteParamsAdapter } from './params/favorites-add-favorite.params';
import { FavoritesApiService } from '../../swagger/services/favorites-api.service';
import { FavoritesClearFavoriteParams, favoritesClearFavoriteParamsAdapter } from './params/favorites-clear-favorite.params';
import { FavoritesDeleteFavoriteParams, favoritesDeleteFavoriteParamsAdapter } from './params/favorites-delete-favorite.params';
import { FavoritesGetFavoriteCountParams, favoritesGetFavoriteCountParamsAdapter } from './params/favorites-get-favorite-count.params';
import { FavoritesGetFavoriteDealsParams, favoritesGetFavoriteDealsParamsAdapter } from './params/favorites-get-favorite-deals.params';
import { FavoritesGetFavoriteOffersParams, favoritesGetFavoriteOffersParamsAdapter } from './params/favorites-get-favorite-offers.params';
import { FavoritesGetFavoriteOrganizationsParams, favoritesGetFavoriteOrganizationsParamsAdapter } from './params/favorites-get-favorite-organizations.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOrganizationShortInfo } from '../models/market-organization-short-info.interface';
import { MarketSearchResult } from '../models/market-search-result.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoritesRepository {
  private readonly _api = inject(FavoritesApiService);

  favoritesAddFavorite(params?: FavoritesAddFavoriteParams): Observable<void> {
    return this._api.favoritesAddFavorite(favoritesAddFavoriteParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  favoritesClearFavorite(params: FavoritesClearFavoriteParams): Observable<void> {
    return this._api.favoritesClearFavorite(favoritesClearFavoriteParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  favoritesDeleteFavorite(params?: FavoritesDeleteFavoriteParams): Observable<void> {
    return this._api.favoritesDeleteFavorite(favoritesDeleteFavoriteParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  favoritesGetFavoriteCount(params?: FavoritesGetFavoriteCountParams): Observable<FavoriteCountInfo> {
    return this._api.favoritesGetFavoriteCount(favoritesGetFavoriteCountParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFavoriteCountInfoToUI(res?.data))
    );
  }

  favoritesGetFavoriteDeals(params?: FavoritesGetFavoriteDealsParams): Observable<MarketSearchResult[]> {
    return this._api.favoritesGetFavoriteDeals(favoritesGetFavoriteDealsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketSearchResultToUI(item)))
    );
  }

  favoritesGetFavoriteOffers(params?: FavoritesGetFavoriteOffersParams): Observable<MarketSearchResult[]> {
    return this._api.favoritesGetFavoriteOffers(favoritesGetFavoriteOffersParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketSearchResultToUI(item)))
    );
  }

  favoritesGetFavoriteOrganizations(params?: FavoritesGetFavoriteOrganizationsParams): Observable<MarketOrganizationShortInfo[]> {
    return this._api.favoritesGetFavoriteOrganizations(favoritesGetFavoriteOrganizationsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketOrganizationShortInfoToUI(item)))
    );
  }

}
