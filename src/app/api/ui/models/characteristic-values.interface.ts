import { CharacteristicListValues } from './characteristic-list-values.interface';
import { CharacteristicTypeEnum } from '../enums/characteristic-type.enum';

// @ts-ignore
export interface CharacteristicValues {
  characteristicId: number;
  comment: string;
  id: number;
  isApproved: boolean;
  list: CharacteristicListValues[];
  name: string;
  supplierId: number;
  type: CharacteristicTypeEnum;
  value: string;
  value2: string;
  yesNo: boolean;
}
