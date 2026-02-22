import { FavoritesGetFavoriteCount$Params } from '../../../swagger/fn/favorites/favorites-get-favorite-count';

// @ts-ignore
export interface FavoritesGetFavoriteCountParams {
}

export function favoritesGetFavoriteCountAdapter(params?: FavoritesGetFavoriteCountParams): FavoritesGetFavoriteCount$Params {
  if (!params) {
    return {} as FavoritesGetFavoriteCount$Params;
  }
  return {
  };
}
