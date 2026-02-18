import { FavoritesGetFavoriteCount$Params } from '../../../swagger/fn/favorites/favorites-get-favorite-count';

export interface FavoritesGetFavoriteCountParams {
}

export const favoritesGetFavoriteCountParamsAdapter = {
  adapt(params?: FavoritesGetFavoriteCountParams): FavoritesGetFavoriteCount$Params {
    if (!params) {
      return {} as FavoritesGetFavoriteCount$Params;
    }
    return {
    };
  }
};
