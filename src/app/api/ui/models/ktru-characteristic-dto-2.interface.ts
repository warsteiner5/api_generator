import { KtruCharacteristicValue } from './ktru-characteristic-value.interface';

export interface KtruCharacteristicDto2 {
  characteristicChoiceTypeId: number;
  characteristicKindId: number;
  characteristicTypeId: number;
  characteristicValues: KtruCharacteristicValue[];
  code: string;
  id: number;
  isActual: boolean;
  isRequired: boolean;
  name: string;
}
