/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicListValuesDto } from '../models/api-characteristic-list-values-dto';
import { ApiCharacteristicOperationEnum } from '../models/api-characteristic-operation-enum';
import { ApiCharacteristicTypeEnum } from '../models/api-characteristic-type-enum';
import { ApiEquivalentTableCharacteristicValuesDto } from '../models/api-equivalent-table-characteristic-values-dto';
export interface ApiEquivalentTableCharacteristicDto {
  Id?: number;
  List?: Array<ApiCharacteristicListValuesDto> | null;
  Name?: string | null;
  Operation?: ApiCharacteristicOperationEnum;
  SupplierValues?: Array<ApiEquivalentTableCharacteristicValuesDto> | null;
  Type?: ApiCharacteristicTypeEnum;
  Value?: string | null;
  Value2?: string | null;
  YesNo?: boolean | null;
}
