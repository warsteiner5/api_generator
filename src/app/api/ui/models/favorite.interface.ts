import { FavoriteEntityTypeEnum } from '../enums/favorite-entity-type.enum';

export interface Favorite {
  entityGuid: string;
  entityId: number;
  entityType: FavoriteEntityTypeEnum;
}
