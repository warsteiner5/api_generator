import { FavoritesGetFavoriteDeals$Params } from '../../../swagger/fn/favorites/favorites-get-favorite-deals';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface FavoritesGetFavoriteDealsParams {
  body?: SearchObjectAlt;
}

export const favoritesGetFavoriteDealsParamsAdapter = {
  adapt(params?: FavoritesGetFavoriteDealsParams): FavoritesGetFavoriteDeals$Params {
    if (!params) {
      return {} as FavoritesGetFavoriteDeals$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
