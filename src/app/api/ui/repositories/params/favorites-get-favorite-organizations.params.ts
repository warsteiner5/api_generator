import { FavoritesGetFavoriteOrganizations$Params } from '../../../swagger/fn/favorites/favorites-get-favorite-organizations';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface FavoritesGetFavoriteOrganizationsParams {
  body?: SearchObjectAlt;
}

export function favoritesGetFavoriteOrganizationsAdapter(params?: FavoritesGetFavoriteOrganizationsParams): FavoritesGetFavoriteOrganizations$Params {
  if (!params) {
    return {} as FavoritesGetFavoriteOrganizations$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
