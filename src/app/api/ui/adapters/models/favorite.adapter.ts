import { ApiFavoriteDto } from '../../../swagger/models/api-favorite-dto';
import { Favorite } from '../../models/favorite.interface';
import { favoriteEntityTypeEnumAdapter } from '../enums/favorite-entity-type-enum.adapter';

export const favoriteAdapter = (source?: ApiFavoriteDto | null): Favorite => {
  return {
    entityGuid: source?.EntityGuid,
    entityId: source?.EntityId,
    entityType: source?.EntityType === null ? undefined : favoriteEntityTypeEnumAdapter(source?.EntityType),
  };
}
