/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicListValuesDto } from '../models/api-characteristic-list-values-dto';
import { ApiCharacteristicTypeEnum } from '../models/api-characteristic-type-enum';
export interface ApiCharacteristicValuesDto {
  CharacteristicId?: number;
  Comment?: string | null;
  Id?: number;
  IsApproved?: boolean;
  List?: Array<ApiCharacteristicListValuesDto> | null;
  Name?: string | null;
  SupplierId?: number;
  Type?: ApiCharacteristicTypeEnum;
  Value?: string | null;
  Value2?: string | null;
  YesNo?: boolean | null;
}
