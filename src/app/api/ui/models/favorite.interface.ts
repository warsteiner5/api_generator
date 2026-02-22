import { FavoriteEntityTypeEnum } from '../enums/favorite-entity-type.enum';

// @ts-ignore
export interface Favorite {
  entityGuid: string;
  entityId: number;
  entityType: FavoriteEntityTypeEnum;
}
