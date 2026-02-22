import { FavoritesGetFavoriteDeals$Params } from '../../../swagger/fn/favorites/favorites-get-favorite-deals';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface FavoritesGetFavoriteDealsParams {
  body?: SearchObjectAlt;
}

export function favoritesGetFavoriteDealsAdapter(params?: FavoritesGetFavoriteDealsParams): FavoritesGetFavoriteDeals$Params {
  if (!params) {
    return {} as FavoritesGetFavoriteDeals$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
