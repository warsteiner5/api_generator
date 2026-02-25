import { FavoriteCountInfo } from '../models/favorite-count-info.interface';
import { favoriteCountInfoAdapter } from '../adapters/models/favorite-count-info.adapter';
import { FavoritesAddFavoriteParams, favoritesAddFavoriteAdapter } from './params/favorites-add-favorite.params';
import { FavoritesApiService } from '../../swagger/services/favorites-api.service';
import { FavoritesClearFavoriteParams, favoritesClearFavoriteAdapter } from './params/favorites-clear-favorite.params';
import { FavoritesDeleteFavoriteParams, favoritesDeleteFavoriteAdapter } from './params/favorites-delete-favorite.params';
import { FavoritesGetFavoriteCountParams, favoritesGetFavoriteCountAdapter } from './params/favorites-get-favorite-count.params';
import { FavoritesGetFavoriteDealsParams, favoritesGetFavoriteDealsAdapter } from './params/favorites-get-favorite-deals.params';
import { FavoritesGetFavoriteOffersParams, favoritesGetFavoriteOffersAdapter } from './params/favorites-get-favorite-offers.params';
import { FavoritesGetFavoriteOrganizationsParams, favoritesGetFavoriteOrganizationsAdapter } from './params/favorites-get-favorite-organizations.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOrganizationShortInfo } from '../models/market-organization-short-info.interface';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfMarketOrganizationShortInfoAdapter } from '../adapters/models/market-pagination-result-of-list-of-market-organization-short-info.adapter';
import { marketPaginationResultOfListOfMarketSearchResultAdapter } from '../adapters/models/market-pagination-result-of-list-of-market-search-result.adapter';
import { MarketSearchResult } from '../models/market-search-result.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoritesRepository {
  private readonly _api = inject(FavoritesApiService);

  favoritesAddFavorite(params?: FavoritesAddFavoriteParams): Observable<void> {
    return this._api.favoritesAddFavorite(favoritesAddFavoriteAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  favoritesClearFavorite(params: FavoritesClearFavoriteParams): Observable<void> {
    return this._api.favoritesClearFavorite(favoritesClearFavoriteAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  favoritesDeleteFavorite(params?: FavoritesDeleteFavoriteParams): Observable<void> {
    return this._api.favoritesDeleteFavorite(favoritesDeleteFavoriteAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  favoritesGetFavoriteCount(params?: FavoritesGetFavoriteCountParams): Observable<FavoriteCountInfo> {
    return this._api.favoritesGetFavoriteCount(favoritesGetFavoriteCountAdapter(params)).pipe(
      map((res) => favoriteCountInfoAdapter(res?.data))
    );
  }

  favoritesGetFavoriteDeals(params?: FavoritesGetFavoriteDealsParams): Observable<MarketPaginationResult<MarketSearchResult[]>> {
    return this._api.favoritesGetFavoriteDeals(favoritesGetFavoriteDealsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfMarketSearchResultAdapter(res?.data))
    );
  }

  favoritesGetFavoriteOffers(params?: FavoritesGetFavoriteOffersParams): Observable<MarketPaginationResult<MarketSearchResult[]>> {
    return this._api.favoritesGetFavoriteOffers(favoritesGetFavoriteOffersAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfMarketSearchResultAdapter(res?.data))
    );
  }

  favoritesGetFavoriteOrganizations(params?: FavoritesGetFavoriteOrganizationsParams): Observable<MarketPaginationResult<MarketOrganizationShortInfo[]>> {
    return this._api.favoritesGetFavoriteOrganizations(favoritesGetFavoriteOrganizationsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfMarketOrganizationShortInfoAdapter(res?.data))
    );
  }

}
