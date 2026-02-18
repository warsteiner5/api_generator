import { FavoritesGetFavoriteOrganizations$Params } from '../../../swagger/fn/favorites/favorites-get-favorite-organizations';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface FavoritesGetFavoriteOrganizationsParams {
  body?: SearchObjectAlt;
}

export const favoritesGetFavoriteOrganizationsParamsAdapter = {
  adapt(params?: FavoritesGetFavoriteOrganizationsParams): FavoritesGetFavoriteOrganizations$Params {
    if (!params) {
      return {} as FavoritesGetFavoriteOrganizations$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
