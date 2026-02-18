import { Favorite } from '../../models/favorite.interface';
import { FavoritesAddFavorite$Params } from '../../../swagger/fn/favorites/favorites-add-favorite';
import { adaptApiFavoriteDto } from '../../adapters/toDto/api-favorite-dto.adapter';

export interface FavoritesAddFavoriteParams {
  body?: Favorite;
}

export const favoritesAddFavoriteParamsAdapter = {
  adapt(params?: FavoritesAddFavoriteParams): FavoritesAddFavorite$Params {
    if (!params) {
      return {} as FavoritesAddFavorite$Params;
    }
    return {
      body: adaptApiFavoriteDto(params.body),
    };
  }
};
