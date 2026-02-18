/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicSourceEnum } from '../models/api-characteristic-source-enum';
export interface ApiDisplayCharacteristicDto {
  CharacteristicSource?: ApiCharacteristicSourceEnum;
  Id?: number;
  Name?: string | null;
  UnitCode?: string | null;
  UnitName?: string | null;
  Value?: string | null;
  Value2?: string | null;
}
