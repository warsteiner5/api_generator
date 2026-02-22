import { FavoritesGetFavoriteOffers$Params } from '../../../swagger/fn/favorites/favorites-get-favorite-offers';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface FavoritesGetFavoriteOffersParams {
  body?: SearchObjectAlt;
}

export function favoritesGetFavoriteOffersAdapter(params?: FavoritesGetFavoriteOffersParams): FavoritesGetFavoriteOffers$Params {
  if (!params) {
    return {} as FavoritesGetFavoriteOffers$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
