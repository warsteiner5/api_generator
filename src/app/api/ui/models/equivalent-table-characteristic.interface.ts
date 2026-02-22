import { CharacteristicListValues } from './characteristic-list-values.interface';
import { CharacteristicOperationEnum } from '../enums/characteristic-operation.enum';
import { CharacteristicTypeEnum } from '../enums/characteristic-type.enum';
import { EquivalentTableCharacteristicValues } from './equivalent-table-characteristic-values.interface';

// @ts-ignore
export interface EquivalentTableCharacteristic {
  id: number;
  list: CharacteristicListValues[];
  name: string;
  operation: CharacteristicOperationEnum;
  supplierValues: EquivalentTableCharacteristicValues[];
  type: CharacteristicTypeEnum;
  value: string;
  value2: string;
  yesNo: boolean;
}
