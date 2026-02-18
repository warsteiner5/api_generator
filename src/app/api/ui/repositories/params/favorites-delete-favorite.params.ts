import { FavoriteEntityTypeEnum } from '../../enums/favorite-entity-type.enum';
import { FavoritesDeleteFavorite$Params } from '../../../swagger/fn/favorites/favorites-delete-favorite';
import { adaptApiFavoriteEntityTypeEnum } from '../../adapters/toDto/api-favorite-entity-type-enum.adapter';

export interface FavoritesDeleteFavoriteParams {
  entityId?: number;
  entityGuid?: string;
  entityType?: FavoriteEntityTypeEnum;
}

export const favoritesDeleteFavoriteParamsAdapter = {
  adapt(params?: FavoritesDeleteFavoriteParams): FavoritesDeleteFavorite$Params {
    if (!params) {
      return {} as FavoritesDeleteFavorite$Params;
    }
    return {
      EntityId: params.entityId,
      EntityGuid: params.entityGuid,
      EntityType: adaptApiFavoriteEntityTypeEnum(params.entityType),
    };
  }
};
