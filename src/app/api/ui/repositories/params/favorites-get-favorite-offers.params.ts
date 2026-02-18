import { FavoritesGetFavoriteOffers$Params } from '../../../swagger/fn/favorites/favorites-get-favorite-offers';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface FavoritesGetFavoriteOffersParams {
  body?: SearchObjectAlt;
}

export const favoritesGetFavoriteOffersParamsAdapter = {
  adapt(params?: FavoritesGetFavoriteOffersParams): FavoritesGetFavoriteOffers$Params {
    if (!params) {
      return {} as FavoritesGetFavoriteOffers$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
