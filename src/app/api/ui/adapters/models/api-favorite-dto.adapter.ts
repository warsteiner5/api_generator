import { Favorite } from '../../models/favorite.interface';
import { ApiFavoriteDto } from '../../../swagger/models/api-favorite-dto';
import { apiFavoriteEntityTypeEnumAdapter } from '../enums/api-favorite-entity-type-enum.adapter';

export const apiFavoriteDtoAdapter = (source?: Favorite | null): ApiFavoriteDto => {
  return {
    EntityGuid: source?.entityGuid,
    EntityId: source?.entityId,
    EntityType: source?.entityType === null ? undefined : apiFavoriteEntityTypeEnumAdapter(source?.entityType),
  };
}
