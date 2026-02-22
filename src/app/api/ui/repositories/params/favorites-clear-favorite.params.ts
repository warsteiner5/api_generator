import { FavoriteEntityTypeEnum } from '../../enums/favorite-entity-type.enum';
import { FavoritesClearFavorite$Params } from '../../../swagger/fn/favorites/favorites-clear-favorite';
import { apiFavoriteEntityTypeEnumAdapter } from '../../adapters/enums/api-favorite-entity-type-enum.adapter';

// @ts-ignore
export interface FavoritesClearFavoriteParams {
  entityType: FavoriteEntityTypeEnum;
}

export function favoritesClearFavoriteAdapter(params?: FavoritesClearFavoriteParams): FavoritesClearFavorite$Params {
  if (!params) {
    return {} as FavoritesClearFavorite$Params;
  }
  return {
      entityType: apiFavoriteEntityTypeEnumAdapter(params.entityType),
  };
}
