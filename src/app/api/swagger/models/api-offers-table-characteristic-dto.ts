/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicApprovementStatusEnum } from '../models/api-characteristic-approvement-status-enum';
import { ApiCharacteristicListValuesDto } from '../models/api-characteristic-list-values-dto';
import { ApiCharacteristicOperationEnum } from '../models/api-characteristic-operation-enum';
import { ApiCharacteristicTypeEnum } from '../models/api-characteristic-type-enum';
import { ApiOffersTableCharacteristicValuesDto } from '../models/api-offers-table-characteristic-values-dto';
export interface ApiOffersTableCharacteristicDto {
  ApprovementStatus?: ApiCharacteristicApprovementStatusEnum;
  Id?: number;
  List?: Array<ApiCharacteristicListValuesDto> | null;
  Name?: string | null;
  OkeiCode?: string | null;
  OkeiDescription?: string | null;
  Operation?: ApiCharacteristicOperationEnum;
  SupplierId?: number;
  SupplierName?: string | null;
  SupplierValues?: Array<ApiOffersTableCharacteristicValuesDto> | null;
  Type?: ApiCharacteristicTypeEnum;
  Value?: string | null;
  Value2?: string | null;
  YesNo?: boolean | null;
}
