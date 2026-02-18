/* tslint:disable */
/* eslint-disable */
import { ApiFavoriteEntityTypeEnum } from '../models/api-favorite-entity-type-enum';
export interface ApiFavoriteDto {
  EntityGuid?: string | null;
  EntityId?: number | null;
  EntityType?: ApiFavoriteEntityTypeEnum;
}
