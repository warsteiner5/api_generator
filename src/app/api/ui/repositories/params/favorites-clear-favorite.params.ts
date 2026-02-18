import { FavoriteEntityTypeEnum } from '../../enums/favorite-entity-type.enum';
import { FavoritesClearFavorite$Params } from '../../../swagger/fn/favorites/favorites-clear-favorite';
import { adaptApiFavoriteEntityTypeEnum } from '../../adapters/toDto/api-favorite-entity-type-enum.adapter';

export interface FavoritesClearFavoriteParams {
  entityType: FavoriteEntityTypeEnum;
}

export const favoritesClearFavoriteParamsAdapter = {
  adapt(params?: FavoritesClearFavoriteParams): FavoritesClearFavorite$Params {
    if (!params) {
      return {} as FavoritesClearFavorite$Params;
    }
    return {
      entityType: adaptApiFavoriteEntityTypeEnum(params.entityType),
    };
  }
};
