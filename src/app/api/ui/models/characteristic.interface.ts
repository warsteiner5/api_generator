import { CharacteristicApprovementStatusEnum } from '../enums/characteristic-approvement-status.enum';
import { CharacteristicListValues } from './characteristic-list-values.interface';
import { CharacteristicOperationEnum } from '../enums/characteristic-operation.enum';
import { CharacteristicTypeEnum } from '../enums/characteristic-type.enum';
import { CharacteristicValues } from './characteristic-values.interface';

export interface Characteristic {
  approvementStatus: CharacteristicApprovementStatusEnum;
  id: number;
  isApproved: boolean;
  list: CharacteristicListValues[];
  name: string;
  okeiCode: string;
  okeiDescription: string;
  okpd2: string;
  operation: CharacteristicOperationEnum;
  requirementRequestId: number;
  supplierValues: CharacteristicValues[];
  type: CharacteristicTypeEnum;
  value: string;
  value2: string;
  yesNo: boolean;
}
