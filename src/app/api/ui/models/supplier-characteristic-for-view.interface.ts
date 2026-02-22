import { CharacteristicListValues } from './characteristic-list-values.interface';
import { CharacteristicOperationEnum } from '../enums/characteristic-operation.enum';
import { CharacteristicTypeEnum } from '../enums/characteristic-type.enum';

// @ts-ignore
export interface SupplierCharacteristicForView {
  isApproved: boolean;
  list: CharacteristicListValues[];
  name: string;
  operation: CharacteristicOperationEnum;
  type: CharacteristicTypeEnum;
  value: string;
  value2: string;
  yesNo: boolean;
}
