/* tslint:disable */
/* eslint-disable */
import { ApiMarketEntityTypeEnum } from '../models/api-market-entity-type-enum';
export interface ApiSearchActionResultsDto {
  EntityId?: number;
  EntityType?: ApiMarketEntityTypeEnum;
  Name?: string | null;
  NumberInOrder?: number;
  PageNum?: number;
  Price?: number | null;
}
