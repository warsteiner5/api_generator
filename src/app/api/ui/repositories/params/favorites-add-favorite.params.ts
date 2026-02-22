import { Favorite } from '../../models/favorite.interface';
import { FavoritesAddFavorite$Params } from '../../../swagger/fn/favorites/favorites-add-favorite';
import { apiFavoriteDtoAdapter } from '../../adapters/models/api-favorite-dto.adapter';

// @ts-ignore
export interface FavoritesAddFavoriteParams {
  body?: Favorite;
}

export function favoritesAddFavoriteAdapter(params?: FavoritesAddFavoriteParams): FavoritesAddFavorite$Params {
  if (!params) {
    return {} as FavoritesAddFavorite$Params;
  }
  return {
      body: apiFavoriteDtoAdapter(params.body),
  };
}
