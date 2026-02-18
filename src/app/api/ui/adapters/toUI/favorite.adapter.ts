import { ApiFavoriteDto } from '../../../swagger/models/api-favorite-dto';
import { Favorite } from '../../models/favorite.interface';
import { adaptFavoriteEntityTypeEnumToUI } from './favorite-entity-type-enum.adapter';

export function adaptFavoriteToUI(source?: ApiFavoriteDto | null): Favorite {
  return {
    entityGuid: source?.EntityGuid ?? '',
    entityId: source?.EntityId ?? 0,
    entityType: adaptFavoriteEntityTypeEnumToUI(source?.EntityType),
  };
}
