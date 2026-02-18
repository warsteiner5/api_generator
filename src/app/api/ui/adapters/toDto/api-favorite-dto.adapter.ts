import { Favorite } from '../../models/favorite.interface';
import { ApiFavoriteDto } from '../../../swagger/models/api-favorite-dto';
import { adaptApiFavoriteEntityTypeEnum } from './api-favorite-entity-type-enum.adapter';

export function adaptApiFavoriteDto(source?: Favorite | null): ApiFavoriteDto {
  return {
    EntityGuid: source?.entityGuid,
    EntityId: source?.entityId,
    EntityType: adaptApiFavoriteEntityTypeEnum(source?.entityType),
  };
}
