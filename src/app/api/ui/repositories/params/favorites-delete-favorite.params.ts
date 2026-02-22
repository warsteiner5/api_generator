import { FavoriteEntityTypeEnum } from '../../enums/favorite-entity-type.enum';
import { FavoritesDeleteFavorite$Params } from '../../../swagger/fn/favorites/favorites-delete-favorite';
import { apiFavoriteEntityTypeEnumAdapter } from '../../adapters/enums/api-favorite-entity-type-enum.adapter';

// @ts-ignore
export interface FavoritesDeleteFavoriteParams {
  entityId?: number;
  entityGuid?: string;
  entityType?: FavoriteEntityTypeEnum;
}

export function favoritesDeleteFavoriteAdapter(params?: FavoritesDeleteFavoriteParams): FavoritesDeleteFavorite$Params {
  if (!params) {
    return {} as FavoritesDeleteFavorite$Params;
  }
  return {
      EntityId: params.entityId,
      EntityGuid: params.entityGuid,
      EntityType: apiFavoriteEntityTypeEnumAdapter(params.entityType),
  };
}
