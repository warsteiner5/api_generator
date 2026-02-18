/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicApprovementStatusEnum } from '../models/api-characteristic-approvement-status-enum';
import { ApiCharacteristicListValuesDto } from '../models/api-characteristic-list-values-dto';
import { ApiCharacteristicOperationEnum } from '../models/api-characteristic-operation-enum';
import { ApiCharacteristicTypeEnum } from '../models/api-characteristic-type-enum';
import { ApiCharacteristicValuesDto } from '../models/api-characteristic-values-dto';
export interface ApiCharacteristicDto {
  ApprovementStatus?: ApiCharacteristicApprovementStatusEnum;
  Id?: number;
  IsApproved?: boolean;
  List?: Array<ApiCharacteristicListValuesDto> | null;
  Name?: string | null;
  OkeiCode?: string | null;
  OkeiDescription?: string | null;
  Okpd2?: string | null;
  Operation?: ApiCharacteristicOperationEnum;
  RequirementRequestId?: number | null;
  SupplierValues?: Array<ApiCharacteristicValuesDto> | null;
  Type?: ApiCharacteristicTypeEnum;
  Value?: string | null;
  Value2?: string | null;
  YesNo?: boolean | null;
}
