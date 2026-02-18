/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicListValuesDto } from '../models/api-characteristic-list-values-dto';
import { ApiCharacteristicOperationEnum } from '../models/api-characteristic-operation-enum';
import { ApiCharacteristicTypeEnum } from '../models/api-characteristic-type-enum';
export interface ApiSupplierCharacteristicForViewDto {
  IsApproved?: boolean;
  List?: Array<ApiCharacteristicListValuesDto> | null;
  Name?: string | null;
  Operation?: ApiCharacteristicOperationEnum;
  Type?: ApiCharacteristicTypeEnum;
  Value?: string | null;
  Value2?: string | null;
  YesNo?: boolean | null;
}
