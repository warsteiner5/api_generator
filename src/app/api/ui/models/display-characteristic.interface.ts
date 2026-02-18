import { CharacteristicSourceEnum } from '../enums/characteristic-source.enum';

export interface DisplayCharacteristic {
  characteristicSource: CharacteristicSourceEnum;
  id: number;
  name: string;
  unitCode: string;
  unitName: string;
  value: string;
  value2: string;
}
