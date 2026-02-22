import { CharacteristicApprovementStatusEnum } from '../enums/characteristic-approvement-status.enum';
import { CharacteristicListValues } from './characteristic-list-values.interface';
import { CharacteristicOperationEnum } from '../enums/characteristic-operation.enum';
import { CharacteristicTypeEnum } from '../enums/characteristic-type.enum';
import { OffersTableCharacteristicValues } from './offers-table-characteristic-values.interface';

// @ts-ignore
export interface OffersTableCharacteristic {
  approvementStatus: CharacteristicApprovementStatusEnum;
  id: number;
  list: CharacteristicListValues[];
  name: string;
  okeiCode: string;
  okeiDescription: string;
  operation: CharacteristicOperationEnum;
  supplierId: number;
  supplierName: string;
  supplierValues: OffersTableCharacteristicValues[];
  type: CharacteristicTypeEnum;
  value: string;
  value2: string;
  yesNo: boolean;
}
